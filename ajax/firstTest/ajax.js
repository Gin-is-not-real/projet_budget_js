let httpRequest = new XMLHttpRequest();

let textOfPhp = '';

function testRequest(url) {
    console.log(httpRequest);
    //on defini la fonction qui traitera la reponse du serveur 
    // httpRequest.onreadystatechange = myFunction;
    //ou
    httpRequest.onreadystatechange = function() {
        //traitement de la reponse
        console.log('---------> readyState: ', this.readyState, 'status: ', this.status);

        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            console.log('reponse reçu !!!!');

            if(httpRequest.status === 200) {
                console.log('status 200');

                //pour une reponse texte:
                // console.log('responseText : ', httpRequest.responseText);

                //pour une reponse xml 
                let xmldoc = httpRequest.responseXML;
                let root_node = xmldoc.getElementsByTagName('root').item(0);
                let data = root_node.firstChild.data;
                alert(data);
                console.log('responseXML : ', httpRequest.responseXML);
            }
            else {
                console.log('probleme avec la requete', httpRequest.status);
            }
        }
        else {
            console.log('---> pas encore pret');
        }
    };
    //on lance la requete
    // httpRequest.open('GET', 'ajax/ajax.php?get=youhou', true);   //appele le fichier ajax.php avec un GET
    // httpRequest.open('GET', 'ajax/ajax.xml', true);      //appele le fichier xml
    httpRequest.open('GET', url, true);
    httpRequest.send();
}
// testRequest('ajax/ajax.xml');


sendPostRequest('ajax/ajax.php', 12, 52);

function sendPostRequest(url, var1, var2) {
    httpRequest.onreadystatechange = alertContents;
    //pass un get + un post
    // httpRequest.open('POST', url + '?get=' + encodeURIComponent(var1), true);
    httpRequest.open('POST', url, true);

    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('var1=' + encodeURIComponent(var1) + '&var2=' + encodeURIComponent(var2));
}

function alertContents() {
        //traitement de la reponse
        console.log('---------> readyState: ', this.readyState, 'status: ', this.status);

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