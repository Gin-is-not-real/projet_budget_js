makeRequest('ajax/ajax.xml');

function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if(!httpRequest) {
        alert('Impossible de creer une instance de XMLHTTP');
        return false;
    }
    else {
        httpRequest.onreadystatechange = function() {
            alertContents(httpRequest);
        };
        httpRequest.open('GET', url);
        httpRequest.send();
    }
}
function alertContents(httpRequest) {
    try {
        console.log('readyState: ', httpRequest.readyState);

        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            console.log('status: ', httpRequest.status);

            if(httpRequest.status === 200) {
                // alert(httpRequest.responseText); 
                //jusqu'ici tout va bien...

                let xmldoc = httpRequest.responseXML;
                let rootNode = xmldoc.getElementByTagName('root').item(0);
                alert(rootNode.firstChild.data);
            }
            else {
                alert('probleme avec la requete');
            }
        }
    }
    catch(e) {
        alert("Une exception s’est produite : " + e.description);
    }
}