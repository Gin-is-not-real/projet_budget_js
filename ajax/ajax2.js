let httpRequest;

function sendPostRequest(url, lineObject) {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let lineId = lineObject.lineId;
    let expense = lineObject.expense;
    let income = lineObject.income;
    let label = lineObject.label;

    httpRequest.send(
        'line_id=' + encodeURIComponent(lineId) + 
        '&expense=' + encodeURIComponent(expense) +
        '&income=' + encodeURIComponent(income) +
        '&label=' + encodeURIComponent(label)
        );
}

function alertContents() {
        //traitement de la reponse
        // console.log('---------> readyState: ', this.readyState, 'status: ', this.status);

        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                let response = JSON.parse(httpRequest.responseText);
                alert(response.computedString);
            }
            else {
                console.log('probleme avec la requete', httpRequest.status);
            }
        }
        else {
            console.log('---> pas encore pret');
        }
}

////////////////////////:
//CALL
