//push dans le tableau
//on ajoute une line dans le dom
// function createLine([expense, income], operationLabel) {
let cashTab = document.querySelector('#cash_tab');

function generateTab() {
    for(let i = 0; i < tabTransfers.length; i++) {
        createLine(i, tabTransfers[i], tabTransfers.length);
    }
}

function createLine(index, lineObject, nb_line) {
    let line = document.createElement('form');
    line.id = 'line-' + index;

    let lab = document.createElement('input');
    lab.type = 'text';
	if (index + 1 == nb_line)
		lab.className = 'inp-label-last-line';
    lab.id = 'inp-label-' + index;
    lab.value = lineObject.label;
    lab.disabled = true;
    line.appendChild(lab);

    let exp = createInput(index, 'expense');
    line.appendChild(exp);

    let inc = createInput(index, 'income');
    line.appendChild(inc);

    let btnDelete = document.createElement('input');
    btnDelete.type = 'button';
	btnDelete.className = 'btnDelete';
    btnDelete.id ='btn-del-' + index;
    btnDelete.value = 'X';

    btnDelete.addEventListener('click', function() {
        if(confirm('delete line ' + index + ' ?')) {
            tabTransfers.splice(index, 1);
            line.remove();
			sum_tab = get_sum();
			sum_dspl(sum_tab);

            deleteOperation(index);
        }
    })
    line.appendChild(btnDelete);

    let btnOnEdit = document.createElement('input');
    btnOnEdit.type = 'button';
	btnOnEdit.className = 'btnOnEdit';
    btnOnEdit.id ='btn-on-edit-' + index;
    btnOnEdit.value = 'Edit';

    btnOnEdit.addEventListener('click', function() {
		this.hidden = true;
		btnValidEdit.hidden = false;
		exp.disabled = false;
		inc.disabled = false;
		lab.disabled = false;
    })
    line.appendChild(btnOnEdit);

    let btnValidEdit = document.createElement('input');
    btnValidEdit.type = 'button';
	btnValidEdit.className = 'btnValidEdit';
    btnValidEdit.id ='btn-valid-edit-' + index;
    btnValidEdit.value = 'Valid';
    btnValidEdit.hidden = true;

	btnValidEdit.addEventListener('click', function() {
		this.hidden = true;
		btnOnEdit.hidden = false;
		chg_tab_line(index, lab.value, exp.value, inc.value);

		exp.disabled = true;
		inc.disabled = true;
		lab.disabled = true;
		sum_tab = get_sum();
		sum_dspl(sum_tab);

        updateOperation({'label': lab.value, 'expense': Number(exp.value), 'income': Number(inc.value), 'lineId': index});
	})
    line.appendChild(btnValidEdit);

    cashTab.appendChild(line);
}

//attribue l'id et l'attribut read only en fonction du type de l'operation
function createInput(index, operationType) {
    let inp = document.createElement('input');
    inp.type = 'number';
	inp.className = 'inp-exp-inc';
    inp.id = 'inp-' + operationType + '-' + index;
    inp.value = tabTransfers[index][operationType] || 0;
    inp.disabled = true;
    inp.readOnly = inp.value == 0 ? true : false;

    return inp;
}

//CALLS TESTS
// tabTransfers.push({'expense': 10, 'income': 0});
// tabTransfers.push({'expense': 10, 'income': 0});
// tabTransfers.push({'expense': 0, 'income': 50});
// tabTransfers.push({'expense': 30, 'income': 30, 'label': 'test'});

generateTab();