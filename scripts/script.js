let tabTransfers = [];
// console.log(tabTransfers);

let btnExpense = document.querySelector('#btn-new-expense');
let btnIncome = document.querySelector('#btn-new-income');

let inpExpense = document.querySelector('#inp-new-expense');
let inpIncome = document.querySelector('#inp-new-income');

let inpLabel = document.querySelector('#inp-new-label');

let sum_tab;
let sum_expense = document.querySelector('div#sum #sum_expense');
let sum_recipe = document.querySelector('div#sum #recipe');
let sum_income = document.querySelector('div#sum #sum_income');

btnExpense.addEventListener('click', addExpense);
btnIncome.addEventListener('click', addIncome);

tabTransfers.push({'label': 'Expense', 'expense': 10, 'income': 0});
tabTransfers.push({'label': 'Expense', 'expense': 10, 'income': 0});
tabTransfers.push({'label': 'Income', 'expense': 0, 'income': 50});
tabTransfers.push({'label': 'Expense', 'expense': 30, 'income': 0});
tabTransfers.push({'label': 'Expense', 'expense': 25, 'income': 0});
tabTransfers.push({'label': 'Expense', 'expense': 50, 'income': 0});
tabTransfers.push({'label': 'Expense', 'expense': 40, 'income': 0});
tabTransfers.push({'label': 'Income', 'expense': 0, 'income': 30});
tabTransfers.push({'label': 'Expense', 'expense': 10, 'income': 0});
tabTransfers.push({'label': 'Income', 'expense': 0, 'income': 70});
tabTransfers.push({'label': 'Income', 'expense': 0, 'income': 60});
tabTransfers.push({'label': 'Income', 'expense': 0, 'income': 45});
sum_tab = get_sum();
sum_dspl(sum_tab);

function addExpense() {
	if (inpExpense.value != '')
    {
		let value = inpExpense.value;
    	let label = inpLabel.value || 'Expense';
    	let lineObject = {'label': label, 'expense': Number(value), 'income': 0};

   		tabTransfers.push(lineObject);

		createLine(tabTransfers.length - 1, lineObject);

		sum_tab = get_sum();
		sum_dspl(sum_tab);
	}
    inpExpense.value = '';
}

function addIncome() {
	if (inpIncome.value != '')
    {
		let value = inpIncome.value;
		let label = inpLabel.value || 'Income';
		let lineObject = {'label': label, 'expense': 0, 'income': Number(value)};

		tabTransfers.push(lineObject);

		createLine(tabTransfers.length - 1, lineObject);

		sum_tab = get_sum();
		sum_dspl(sum_tab);
	}
    inpIncome.value = '';
}



