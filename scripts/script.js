let tabTransfers = [];

let inpLabel = document.querySelector('#inp-new-label');
let inpExpense = document.querySelector('#inp-new-expense');
let inpIncome = document.querySelector('#inp-new-income');

let btnExpense = document.querySelector('#btn-new-expense');
let btnIncome = document.querySelector('#btn-new-income');

let sum_tab;
let sum_expense = document.querySelector('div#sum #sum_expense');
let sum_recipe = document.querySelector('div#sum #recipe');
let sum_income = document.querySelector('div#sum #sum_income');


inpExpense.addEventListener('input', function() {
    inpIncome.value = 0;
});
inpIncome.addEventListener('input', function() {
    inpExpense.value = 0;
});

btnExpense.addEventListener('click', addExpense);
btnIncome.addEventListener('click', addIncome);
//////////////////////////////////////////////////////////
getOperations();


///////////////
//#
function fillTabTransfers(transferts) {
    transferts.forEach(elt => {
        // console.log(elt.line_id);
        tabTransfers[elt.line_id.toString()] = {'label': elt.label, 'expense': elt.expense, 'income': elt.income, 'lineId': elt.line_id};
        // tabTransfers.push({'label': elt.label, 'expense': elt.expense, 'income': elt.income, 'lineId': elt.line_id});
    });
    setTimeout(function() {
        generateTab();
    }, 500);

    sum_tab = get_sum();
    sum_dspl(sum_tab);
}

function addExpense() {
    let value = inpExpense.value;
    let label = inpLabel.value || 'Expense';
    let lineId = tabTransfers.length;
    let lineObject = {'label': label, 'expense': Number(value), 'income': 0, 'lineId': lineId};

    tabTransfers[lineId.toString()] = lineObject;
    // tabTransfers.push(lineObject);
    createLine(lineId, lineObject);

	sum_tab = get_sum();
	sum_dspl(sum_tab);

    newOperation(lineObject);

    inpExpense.value = '';
	inpIncome.value = '';
	inpLabel.value = '';
}

function addIncome() {
    let value = inpIncome.value;
    let label = inpLabel.value || 'Income';
    let lineId = tabTransfers.length;
    console.log(tabTransfers.length);
    let lineObject = {'label': label, 'expense': 0, 'income': Number(value), 'lineId': lineId};

    tabTransfers[lineId.toString()] = lineObject;
    // tabTransfers.push(lineObject);
    createLine(lineId, lineObject);

	sum_tab = get_sum();
	sum_dspl(sum_tab);

    newOperation(lineObject);

	inpExpense.value = '';
	inpIncome.value = '';
	inpLabel.value = '';
}

