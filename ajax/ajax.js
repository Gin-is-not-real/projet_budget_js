let httpRequest = new XMLHttpRequest();

function testRequest() {
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
                console.log('responseText : ', httpRequest.responseText);

                //pour une reponse xml (ne fonctionne pas..)
                // let xmldoc = httpRequest.responseXML;
                // let root_node = xmldoc.getElementsByTagName('root').item(0);
                // alert(root_node.firstChild.data);
                // console.log('responseXML : ', httpRequest.responseXML);
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
    httpRequest.open('GET', 'ajax/ajax.php?get=youhou', true);

    httpRequest.send();
}
testRequest();

