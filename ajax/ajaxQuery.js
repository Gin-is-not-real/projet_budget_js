//la page ajaxQuery recupere des données en base et les affiche dans un echo
//je vais essayer d'aficher ce resultat

let httpRequest;

function getResultOfQuery() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = displayResult;
    httpRequest.open('GET', 'ajax/ajaxQuery.php', true);    
    httpRequest.send();
}

function displayResult() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
        if(httpRequest.status === 200) {
            document.querySelector('main').innerHTML = httpRequest.responseText;
        }
        else {
            console.log('probleme avec la requete', httpRequest.status);
        }
    }
    else {
        console.log(httpRequest.readyState + ' ---> pas encore pret');
    } 
}