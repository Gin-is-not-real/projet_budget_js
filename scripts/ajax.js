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

//creer requete POST
