//push dans le tableau
//on ajoute une line dans le dom
// function createLine([expense, income], operationLabel) {
let cashTab = document.querySelector('#cash_tab');

function generateTab() {
    for(let i = 0; i < tabTransfers.length -1; i++) {
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

    let exp = document.createElement('input');
    exp.type = 'number';
    exp.id = 'inp-exp-' + index;
    exp.value = tabLine['expense'];
    exp.disabled = true;
    line.appendChild(exp);

    let inc = document.createElement('input');
    exp.type = 'number';
    inc.id = 'inp-inc-' + index;
    inc.value = tabLine['income'];
    inc.disabled = true;
    line.appendChild(inc);

    let lab = document.createElement('input');
    exp.type = 'text';
    lab.id = 'inp-label-' + index;
    lab.value = tabLine['label'];
    lab.disabled = true;
    line.appendChild(lab);

    cashTab.appendChild(line);
}

tabTransfers.push({'expense': 10, 'income': 0});
tabTransfers.push({'expense': 10});
tabTransfers.push({'income': 50});
tabTransfers.push({'income': 30, 'label': 'test'});

generateTab();