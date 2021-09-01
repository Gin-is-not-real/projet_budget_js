//push dans le tableau
//on ajoute une line dans le dom
// function createLine([expense, income], operationLabel) {
let cashTab = document.querySelector('#cash_tab');

function generateTab() {
    for(let i = 0; i < tabTransfers.length; i++) {
        let line = tabTransfers[i];

        createLine(i);
    }
}

function createLine(index) {
    //stocke la ligne du tableau dees trznferts et defini le type de l'operation 
    let tabLine = tabTransfers[index];
    let operationType = tabLine['expense'] != 0 ? tabLine['expense'] : tabLine['income'];

    let line = document.createElement('form');
    line.id = 'line-' + index;

    exp = createInput(index, 'expense');
    line.appendChild(exp);

    inc = createInput(index, 'income');
    line.appendChild(inc);

    let lab = document.createElement('input');
    exp.type = 'text';
    lab.id = 'inp-label-' + index;
    lab.value = tabLine['label'];
    lab.disabled = true;
    line.appendChild(lab);

    let btnDelete = document.createElement('input');
    btnDelete.type = 'button';
    btnDelete.id ='btn-del-' + index;
    btnDelete.value = 'X';

    btnDelete.addEventListener('click', function() {
        if(confirm('delete line ' + index + ' ?')) {
            tabTransfers.splice(index, 1);
            line.remove();
			sum_tab = get_sum();
			sum_dspl(sum_tab);
            console.log(tabTransfers);
        }
    })
    line.appendChild(btnDelete);

    let btnOnEdit = document.createElement('input');
    btnOnEdit.type = 'button';
    btnOnEdit.id ='btn-on-edit-' + index;
    btnOnEdit.value = 'edit';

    btnOnEdit.addEventListener('click', function() {
    })
    line.appendChild(btnOnEdit);

    let btnValidEdit = document.createElement('input');
    btnValidEdit.type = 'button';
    btnValidEdit.id ='btn-valid-edit-' + index;
    btnValidEdit.value = 'valid';
    btnValidEdit.hidden = true;
    line.appendChild(btnValidEdit);

    cashTab.appendChild(line);
}

//attribue l'id et l'attribut read only en fonction du type de l'operation
function createInput(index, operationType) {
    let inp = document.createElement('input');
    inp.type = 'number';
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