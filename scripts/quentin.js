function add_number()
{
	let sum_expense = 0;
	let sum_income = 0;
	tabTransfers.forEach(item => {
		sum_expense += item['expense'];
		sum_income += item['income'];	
		console.log(item);
	});
	return {'sum_exp': sum_expense, 'sum_in':sum_income};
	// tabTransfers.push({'sum_exp': sum_expense, 'sum_in':sum_income});
}



tabTransfers.push({'expense': 25, 'income': 0});
tabTransfers.push({'expense': 50, 'income': 0});
tabTransfers.push({'expense': 40, 'income': 0});
tabTransfers.push({'expense': 0, 'income': 30});
tabTransfers.push({'expense': 10, 'income': 0});
tabTransfers.push({'expense': 0, 'income': 70});
tabTransfers.push({'expense': 0, 'income': 60});
tabTransfers.push({'expense': 0, 'income': 45});
// console.log(add_number());