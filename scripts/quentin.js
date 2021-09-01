function add_number()
{
	let sum_expense = 0;
	let sum_income = 0;
	let sum_all;
	tabTransfers.forEach(item => {
		sum_expense += item['expense'];
		sum_income += item['income'];	
		console.log(item);
	});
	sum_all = sum_income - sum_expense;
	return {'sum_exp': sum_expense, 'sum_in': sum_income, 'sum_all': sum_all};
	// tabTransfers.push({'sum_exp': sum_expense, 'sum_in':sum_income});
}

function get_sum()
{
	return add_number();
}

function sum_dspl(sum_tab)
{
	sum_expense.textContent = sum_tab['sum_exp'];
	sum_income.textContent = sum_tab['sum_in'];
}

function chg_tab_line(index, new_label, new_expense, new_income)
{
	tabTransfers[index] = {'label': new_label, 'expense': Number(new_expense), 'income': Number(new_income)};
}

// tabTransfers.push({'expense': 25, 'income': 0});
// tabTransfers.push({'expense': 50, 'income': 0});
// tabTransfers.push({'expense': 40, 'income': 0});
// tabTransfers.push({'expense': 0, 'income': 30});
// tabTransfers.push({'expense': 10, 'income': 0});
// tabTransfers.push({'expense': 0, 'income': 70});
// tabTransfers.push({'expense': 0, 'income': 60});
// tabTransfers.push({'expense': 0, 'income': 45});