let tabTransfers = [];
// console.log(tabTransfers);

let btnExpense = document.querySelector('#btn-new-expense');
let btnIncome = document.querySelector('#btn-new-income');

let inpExpense = document.querySelector('#inp-new-expense');
let inpIncome = document.querySelector('#inp-new-income');

let inpLabel = document.querySelector('#inp-new-label');

btnExpense.addEventListener('click', addExpense);
btnIncome.addEventListener('click', addIncome);


function addExpense() {
    let value = inpExpense.value;
    let label = inpLabel.value || '';

    tabTransfers.push({'expense': value, 'income': 0});
    inpExpense.value = '';

    console.log(tabTransfers);
}

function addIncome() {
    let value = inpIncome.value;
    tabTransfers.push({'expense': 0, 'income': value, 'label': label});

    inpIncome.value = '';

    // console.log(tabTransfers);
}



