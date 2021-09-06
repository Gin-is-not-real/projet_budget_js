//la page ajaxQuery recupere des données en base et les affiche dans un echo
//je vais essayer d'aficher ce resultat
let httpRequest;

function getOperations() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                fillTabTransfers();
                // console.log(httpRequest.reponseText);
                // let jsonObj = JSON.parse(httpRequest.responseText);
                // console.log(jsonObj);
                console.log(JSON.parse(httpRequest.responseText));
                document.querySelector('main').innerHTML = httpRequest.responseText;

            }
            else {
                console.log('probleme avec la requete', httpRequest.status);
            }
        }
        else {
            console.log(httpRequest.readyState + ' ---> pas encore pret');
        } 
    };
    httpRequest.open('POST', 'ajax/ajaxQuery.php', true);    
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
}

function updateOperation(lineObject) {
    prepareHttp();
    httpRequest.send(
        'action=' + 'update'+
        '&line_id=' + encodeURIComponent(lineObject.lineId) +
        '&expense=' + encodeURIComponent(lineObject.expense) +
        '&income=' + encodeURIComponent(lineObject.income) +
        '&label=' + encodeURIComponent(lineObject.label)
        );
}

function newOperation(lineObject) {
    prepareHttp();
    httpRequest.send(
        'action=' + 'add'+
        '&line_id=' + encodeURIComponent(lineObject.lineId) + 
        '&expense=' + encodeURIComponent(lineObject.expense) +
        '&income=' + encodeURIComponent(lineObject.income) +
        '&label=' + encodeURIComponent(lineObject.label)
        );
}

function deleteOperation(lineId) {
    prepareHttp();
    httpRequest.send(
        'action=' + 'delete' +
        '&line_id=' + encodeURIComponent(lineId)
        );
}

function prepareHttp() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = displayResult;
    httpRequest.open('POST', 'ajax/ajaxQuery.php', true);    
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}
//////////////////////////////////////////////
function displayResult() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
        if(httpRequest.status === 200) {
            // document.querySelector('main').innerHTML = httpRequest.responseText;
        }
        else {
            console.log('probleme avec la requete', httpRequest.status);
        }
    }
    else {
        console.log(httpRequest.readyState + ' ---> pas encore pret');
    } 
}