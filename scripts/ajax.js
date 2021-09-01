function getHTTPObject() {
    let xmlhttp = false;

    //on creer l'objet si ce n'est pas deja fait
    if(!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        try {
            xmlhttp = new XMLHttpRequest();
        } 
        catch(e) {
            xmlhttp = false;
        }
    }

    if(xmlhttp) {
        //on defini ce qu'il se passera quand la page repond
        xmlhttp.onreadystatechange=function() {
            if(xmlhttp.readyState == 4) {   //4: etat 'complete'
                if(xmlhttp.status == 200) {     //200: 'ok'
                    //on affiche la reponse dans une boite de dialogue
                    alert(xmlhttp.responseText);
                }
            }
        }
    }
    return xmlhttp;
}

window.onload = function() {
    //on associe la fonction verifId à l'événénement onsubmit du formulaire
    document.getElementById('form-new-operation').onsubmit = verifId;
}

function verifId() {
    return !sendData(
        'POST',
        'operations-xml.php',
        'xmlhttp = 1&' + 'expense=' + inpExpense.value + '&' + 'income' + inpIncome.value
    );
}

// * Envoie des données à l'aide d'XmlHttpRequest?
// * @param string methode d'envoi ['GET'|'POST']
// * @param string url
// * @param string données à envoyer sous la forme var1=value1&var2=value2...
function sendData(method, url, data) {
    let xmlhttp = getHTTPObject();

    if(!xmlhttp) {
        return false;
    }

    if(method == 'GET') {
        if(data == 'null') {
            xmlhttp.open('GET', url, true);//ouverture asynchrone
        }
        else {
            xmlhttp.open('GET', url + '?' + data, true);
        }
        xmlhttp.send(null);
    }
    else if(mathod == "POST") {
        xmlhttp.open('POST', url, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp.send(data);
    }
    return true;
}