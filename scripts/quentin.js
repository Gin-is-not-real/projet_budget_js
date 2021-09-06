function add_number()
{
	let sum_expense = 0;
	let sum_income = 0;
	let sum_all;
	tabTransfers.forEach(item => {
		sum_expense += Number(item['expense']);
		sum_income += Number(item['income']);	
	});
	sum_all = sum_income - sum_expense;
	return {'sum_exp': sum_expense, 'sum_in': sum_income, 'sum_all': sum_all};
}

function get_sum()
{
	return add_number();
}

function sum_dspl(sum_tab)
{
	sum_expense.textContent = sum_tab['sum_exp'] + " €";
	sum_recipe.textContent = sum_tab['sum_all'] + " €";
	sum_income.textContent = sum_tab['sum_in'] + " €";
}

function chg_tab_line(index, new_label, new_expense, new_income)
{
	let indexToDel;
    tabTransfers.forEach(elt => {
        if(elt.lineId == index) {
            indexToDel = tabTransfers.indexOf(elt);
        }
    });

	tabTransfers[indexToDel] = {'label': new_label, 'expense': Number(new_expense), 'income': Number(new_income), 'line_id': index};
}

// let length = tabTransfers.length-1;
// console.log(length, tabTransfers[length]);