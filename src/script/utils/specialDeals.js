const DEALS_API_URL =
    'https://gist.githubusercontent.com/ameer-wajid-ali/1f29ebee4295cede36f8d74b45e576df/raw/122966c9a123861249f173911d8d93a76dc06d7a/';
const MS_PER_DAY = 86_400_000;
const DEFAULT_VALIDITY_DAYS = 7;
// steps need to win coupon of ith index
const STEP_NEEDED = [31.8, 29.2, 31, 30.1];

// inserts card of the deal into the given parent as a child
function insertWonCard(parentElement, deal, remainingDays) {
    // create temp element
    const element = document.createElement('temp');
    parentElement.appendChild(element);

    const str = `<div class="coupon-card ${remainingDays < 1 ? 'coupon-card--invalid' : ''}">
                    <div class="coupon-card__info">
                        <h4 class="coupon-card__title">${deal.label}</h4>
                        <span class="coupon-card__expiry"> ${remainingDays < 1 ? `Deal expired` : `Expires in ${remainingDays}d`} </span>
                    </div>
                    <div class="coupon-card__action">
                        <code class="coupon-card__code">${deal.promoCode}</code>
                        <button class="coupon-card__copy-btn" ${remainingDays < 1 ? `disabled` : ``} aria-label="Copy code">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                </div>`;
    element.outerHTML = str;
    const copyBtn =
        parentElement.lastElementChild.lastElementChild.lastElementChild;

    copyBtn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(deal.promoCode);
        const temp = copyBtn.innerHTML;

        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="#f73657" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>`;

        setTimeout(() => {
            copyBtn.innerHTML = temp;
        }, 1000);
    });
}

// get all deals from by API call if not available in local storage
async function getAllDeals() {
    let data = null;
    try {
        data = localStorage.getItem('allDeals');
        data = JSON.parse(data);

        if (!data) {
            const response = await fetch(DEALS_API_URL);

            if (!response.ok) throw new Error('Network error');
            data = await response.json();

            data = data.map((el) => {
                return {
                    ...el,
                    validFor: el.validFor ? el.validFor : DEFAULT_VALIDITY_DAYS,
                };
            });

            localStorage.setItem('allDeals', JSON.stringify(data));
        }
    } catch (error) {
        // error message
        alert(error);
    }

    return data;
}

// return the unlocked deals (deals won by user)
function getUnlockedDeals() {
    return localStorage.getItem('unlockedDeals')
        ? JSON.parse(localStorage.getItem('unlockedDeals'))
        : [];
}

// return issue date array of the unlocked deals
function getIssueDate() {
    return localStorage.getItem('issueDate')
        ? JSON.parse(localStorage.getItem('issueDate'))
        : [];
}

// after winning it handle changes in ui and in local storage
function handleWonState(allDeals, index) {
    const winningSection = document.querySelector('.winning-section');
    winningSection.innerHTML = `<span class="winning-section__label">You won!</span>`;
    insertWonCard(winningSection, allDeals[index], allDeals[index].validFor);
}

// insert data into the section of all unlocked deals
function insertUnlockedDeals(unlockedDeals, allDeals, issueDate) {
    const title = document.querySelector(
        'body > div > div.modal-overlay > div > div.modal-card__header > h2',
    );
    const titleText = title.innerText;
    title.innerText = `Unlocked Deals`;

    const desc = document.querySelector(
        'body > div > div.modal-overlay > div > div.modal-card__header > p',
    );
    const descText = desc.innerText;
    desc.innerText = `All the deals you've unlocked yet!`;

    const wheelContainer = document.querySelector(
        'body > div > div.modal-overlay > div > div.modal-card__wheel-container',
    );
    const wheelContainerInnerHTML = wheelContainer.innerHTML;
    wheelContainer.innerHTML = `<div class="modal-card__cards"> </div>`;

    for (let i = 0; i < unlockedDeals.length; i++) {
        const deal = unlockedDeals[i];
        const issued = issueDate[i];

        insertWonCard(
            wheelContainer.firstElementChild,
            allDeals[deal],
            Math.ceil(
                (allDeals[deal].validFor * MS_PER_DAY - Date.now() + issued) /
                    MS_PER_DAY,
            ),
        );
    }

    const goBackBtn = document.createElement('button');
    wheelContainer.appendChild(goBackBtn);
    goBackBtn.innerHTML = `<span>Go Back</span>`;
    goBackBtn.classList.add('view-deals-btn');

    const reset = () => {
        title.innerText = titleText;
        desc.innerText = descText;
        wheelContainer.innerHTML = wheelContainerInnerHTML;
        handleStart();
    };

    document
        .querySelector('.modal-card__close')
        .addEventListener('click', reset);
    goBackBtn.addEventListener('click', reset);
}

// it handle the state of show deals btn and its badge number
function handleShowDealsBtn(allDeals) {
    const unlockedDeals = getUnlockedDeals();
    const issueDate = getIssueDate();

    const showUnlockedDealsBtn = document.querySelector('.view-deals-btn');
    showUnlockedDealsBtn.classList.remove('hidden');

    if (unlockedDeals.length == 0) {
        showUnlockedDealsBtn.disabled = true;
        showUnlockedDealsBtn.innerHTML = `<span>Spin To Unlock Deals </span>`;
    } else {
        showUnlockedDealsBtn.innerHTML = `<span>View All Unlocked Deals</span> <span class="view-deals-btn__badge"> ${unlockedDeals.length} </span>`;
        showUnlockedDealsBtn.disabled = false;

        showUnlockedDealsBtn.onclick = () => {
            insertUnlockedDeals(unlockedDeals, allDeals, issueDate);
        };
    }
}

// it rotates the wheel and stops of selected prize
function handleSpinRotation(result, btn, remainingDeals, allDeals) {
    let deg = 1;
    let step = STEP_NEEDED[result];
    const wheelStyle = document.querySelector('.wheel--offers').style;
    const showUnlockedDealsBtn = document.querySelector('.view-deals-btn');
    const closeBtn = document.querySelector('.modal-card__close');
    closeBtn.disabled = true;
    showUnlockedDealsBtn.disabled = true;
    btn.disabled = true;

    const interval = setInterval(() => {
        wheelStyle.transform = `rotate(${deg}deg)`;

        deg = (step + deg) % 360;
        step = step - 0.1;

        if (step < 0) {
            clearInterval(interval);
            handleWonState(allDeals, remainingDeals[result]);
            showUnlockedDealsBtn.disabled = false;
            closeBtn.disabled = false;

            setTimeout(() => {
                btn.disabled = false;
                handleStart();
            }, 3000);
        }
    }, 20);
}

// spin btn functionality it call the rotation function and store result locally
function handleSpinBtn(remainingDeals, allDeals) {
    const btn = document.querySelector('.wheel--offers__spin-btn');
    btn.addEventListener('click', () => {
        const result = Math.floor(Math.random() * 4);

        // rotate the wheel
        handleSpinRotation(result, btn, remainingDeals, allDeals);

        const unlockedDeals = getUnlockedDeals();
        const issueDate = getIssueDate();
        unlockedDeals.unshift(remainingDeals[result]);
        issueDate.unshift(Date.now());
        localStorage.setItem('unlockedDeals', JSON.stringify(unlockedDeals));
        localStorage.setItem('issueDate', JSON.stringify(issueDate));
    });
}

// initial phase getting all the possible deals and rendering them on the wheel
async function handleStart() {
    const allDeals = await getAllDeals();
    const unlockedDeals = getUnlockedDeals();
    const issueDate = getIssueDate();
    const remainingDeals = [];

    for (let i = 0; i < allDeals.length && remainingDeals.length < 4; i++)
        if (
            !(
                unlockedDeals.includes(i) &&
                // for expired deals
                Date.now() - issueDate[unlockedDeals.indexOf(i)] <
                    allDeals[i].validFor * MS_PER_DAY
            )
        )
            remainingDeals.push(i);

    let str = '';

    // to handle no more deals available case as no wheel is there
    if (remainingDeals.length < 4) {
        str = ``;

        document.querySelector(
            'body > div > div.modal-overlay > div > div.modal-card__header > h2',
        ).innerText = `Come Back later`;

        document
            .querySelector(
                'body > div > div.modal-overlay > div > div.modal-card__wheel-container > img',
            )
            .classList.add('hidden');

        document.querySelector(
            'body > div > div.modal-overlay > div > div.modal-card__header > p',
        ).innerText = `No More Deals Available`;
    } else {
        str = `<div class="wheel wheel--offers">
                    <div class="wheel--offers__slice wheel--offers__slice--top-left">
                        <span>${allDeals[remainingDeals[0]].label}</span>
                    </div>
                    <div class="wheel--offers__slice wheel--offers__slice--top-right">
                        <span>${allDeals[remainingDeals[1]].label}</span>
                    </div>
                    <div class="wheel--offers__slice wheel--offers__slice--bottom-left">
                        <span>${allDeals[remainingDeals[2]].label}</span>
                    </div>
                    <div class="wheel--offers__slice wheel--offers__slice--bottom-right">
                        <span>${allDeals[remainingDeals[3]].label}</span>
                    </div>

                    <button class="wheel--offers__spin-btn">Spin</button>
                </div>`;
    }

    // for starting sate with loading screen
    if (document.querySelector('.wheel--loading'))
        document.querySelector('.wheel--loading').outerHTML = str;

    // coming back from all deals section
    if (document.querySelector('.wheel--offers'))
        document.querySelector('.wheel--offers').outerHTML = str;

    // get all the unlocked deals
    handleShowDealsBtn(allDeals);

    if (remainingDeals.length >= 4) handleSpinBtn(remainingDeals, allDeals);
}

// event listener added on special deals btn
export default function specialDealsBtnPressed() {
    document.querySelector('.header__close-btn').click();
    document.querySelector('.modal-overlay').classList.remove('hidden');
    handleStart();
    const closeBtn = document.querySelector('.modal-card__close');
    closeBtn.focus();
    closeBtn.addEventListener('click', () => {
        document.querySelector('.modal-overlay').classList.add('hidden');
    });
}
