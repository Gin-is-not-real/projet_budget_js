//push dans le tableau
//on ajoute une line dans le dom
// function createLine([expense, income], operationLabel) {
let cashTab = document.querySelector('#cash_tab');

function generateTab() {
    tabTransfers.forEach(elt => {
        // console.log(elt.lineId);
        createLine(elt.lineId, tabTransfers[elt.lineId], tabTransfers.length);
    })
    // for(let i = 0; i < tabTransfers.length; i++) {
    //     createLine(i, tabTransfers[i], tabTransfers.length);
    // }
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
            deleteLine(index);
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
        // activeEditMode(this);
    });
    line.appendChild(btnOnEdit);

    function activeEditMode(btn) {
        let index = btn.id.substring(btn.id.length-1, btn.id.length);

        btn.hidden = true;
        document.querySelector('#btn-valid-edit-' + index).hidden = false;
        document.querySelector('#inp-expense-' + index).disabled = false;
        document.querySelector('#inp-income-' + index).disabled = false;
        document.querySelector('#inp-label-' + index).disabled = false;

        console.log(index);
    }

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

function deleteLine(index) {
    let indexToDel;
    tabTransfers.forEach(elt => {
        if(elt.lineId == index) {
            console.log('TROUVé');
            indexToDel = tabTransfers.indexOf(elt);
        }
    });

    tabTransfers.splice(indexToDel, 1);
    let lines = document.querySelectorAll('div#cash_tab form');

    deleteOperation(index);

    tabTransfers = [];

    lines.forEach(node => {
        console.log(node);
        node.remove();
    });
    getOperations();

    sum_tab = get_sum();
    sum_dspl(sum_tab);
}