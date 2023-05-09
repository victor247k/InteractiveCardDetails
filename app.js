const submit = document.getElementById('confirmBtn');
const cardCVC = document.querySelector('.CVC');
submit.addEventListener('click', function(){
    // text changes 

    CVCfunc()
    NAMEfunc()
    NUMBERfunc()
    DATEfunc()
    final()
});

function CVCfunc() {
    const cvcError = document.querySelector('.cvcError');
    const CVC = document.querySelector('.CVC');

    if (inputCVC.value.length !== 3) {

        inputCVC.style.border = "1px solid hsl(0, 100%, 66%)"
        cvcError.textContent = inputCVC.value.length === 0 ? "Can't be blank" : " ";  
        CVC.textContent = "000"       
        return
    }
    inputCVC.style.border = "1px solid hsl(279, 6%, 55%)"
    CVC.textContent = inputCVC.value;
    cvcError.textContent = " "; 
    return
};

function NAMEfunc() {
    const cardName = document.querySelector('.cardName');
    const nameError = document.querySelector('.nameError');

    if (inputName.value.trim().length < 1) {
        inputName.style.border = "1px solid hsl(0, 100%, 66%)";
        nameError.textContent = "Can't be blank";
        cardName.textContent = "JANE APPLESEED";
        return
    }

    inputName.style.border = "1px solid hsl(279, 6%, 55%)";
    cardName.textContent = inputName.value.trim();
    nameError.textContent = "";
    return
};

function NUMBERfunc() {
    const numberError = document.querySelector('.numberError');
    const cardNumber = document.querySelector('.cardNumber');

    if (inputNumber.value.length < 12) {
        inputNumber.style.border = "1px solid hsl(0, 100%, 66%)";
        numberError.textContent = inputNumber.value.length < 1 ? "Can't be blank" : (/\D/.test(inputNumber.value)) ? "Wrong format, numbers only" : "";
        cardNumber.textContent = "0000 0000 0000 0000";
        return
    }
    inputNumber.style.border = "1px solid hsl(279, 6%, 55%)";
    numberError.textContent = "";
    cardNumber.textContent = inputNumber.value;
    return
};

function DATEfunc() {
    const dateError = document.querySelector('.dateError');
    const cardDate = document.querySelector('.cardDate');


    inputMonth.style.border = inputMonth.value.length === 0 ? "1px solid hsl(0, 100%, 66%)" : "1px solid hsl(279, 6%, 55%)";
    inputYear.style.border = inputYear.value.length === 0 ? "1px solid hsl(0, 100%, 66%)" : "1px solid hsl(279, 6%, 55%)";
    dateError.textContent = (inputYear.value.length === 0 || inputMonth.value.length === 0) ? "Can't be blank" : ""; 

    inputMonth.value = parseInt(inputMonth.value) > 12 ? "12" : parseInt(inputMonth.value) < 10 || inputMonth.value.length < 2 ? `0${inputMonth.value}` : `${inputMonth.value}`;

    cardDate.textContent = (inputMonth.style.border === "1px solid hsl(0, 100%, 66%)" && inputYear.style.border === "1px solid hsl(0, 100%, 66%)") ? "00/00" :
                            `${inputMonth.value.slice(inputMonth.value.length - 2, inputMonth.value.length) || "00"}/${inputYear.value.slice(inputYear.value.length - 2, inputYear.value.length) || "00"}`;
};
const inputYear = document.getElementById('inputYear');
const inputMonth = document.getElementById('inputMonth');
const inputNumber = document.getElementById('inputNumber');
const inputName = document.getElementById('inputName');
const inputCVC = document.querySelector('#inputCVC');


function final() {
    if (
        inputCVC.value.length !== 3 ||
        inputName.value.length === 0 ||
        inputNumber.value.length < 12 ||
        inputYear.value.length === 0 ||
        inputMonth.value.length === 0
        ) {
            console.log('fail')
        return
    }
    const infoContainer = document.querySelector('.infoContainer');
    infoContainer.innerHTML = `
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
    <h1 class="thanks">Thank You!</h1>
    <p class="finalInfo">We've added your card details</p>
    <button id="confirmBtn">Continue</button>`
}

