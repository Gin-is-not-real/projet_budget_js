let tabTransfers = [];
// console.log(tabTransfers);

let btnExpense = document.querySelector('#btn-new-expense');
let btnIncome = document.querySelector('#btn-new-income');

let inpExpense = document.querySelector('#inp-new-expense');
let inpIncome = document.querySelector('#inp-new-income');

let inpLabel = document.querySelector('#inp-new-label');

let sum_tab;
let sum_expense = document.querySelector('div#sum #sum_expense');
let sum_income = document.querySelector('div#sum #sum_income');

btnExpense.addEventListener('click', addExpense);
btnIncome.addEventListener('click', addIncome);

tabTransfers.push({'expense': 10, 'income': 0});
tabTransfers.push({'expense': 10, 'income': 0});
tabTransfers.push({'expense': 0, 'income': 50});
tabTransfers.push({'expense': 30, 'income': 30, 'label': 'test'});
tabTransfers.push({'expense': 25, 'income': 0});
tabTransfers.push({'expense': 50, 'income': 0});
tabTransfers.push({'expense': 40, 'income': 0});
tabTransfers.push({'expense': 0, 'income': 30});
tabTransfers.push({'expense': 10, 'income': 0});
tabTransfers.push({'expense': 0, 'income': 70});
tabTransfers.push({'expense': 0, 'income': 60});
tabTransfers.push({'expense': 0, 'income': 45});
sum_tab = get_sum();
sum_dspl(sum_tab);

function addExpense() {
    let value = inpExpense.value;
    let label = inpLabel.value || '';

    tabTransfers.push({'expense': Number(value), 'income': 0, 'label': label});
    inpExpense.value = '';

    createLine(tabTransfers.length - 1);
	sum_tab = get_sum();
	sum_dspl(sum_tab);
}

function addIncome() {
    let value = inpIncome.value;
    let label = inpLabel.value || '';

    tabTransfers.push({'expense': 0, 'income': Number(value), 'label': label});

    inpIncome.value = '';
    createLine(tabTransfers.length - 1);
	sum_tab = get_sum();
	sum_dspl(sum_tab);
}



