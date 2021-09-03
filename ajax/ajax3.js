window.addEventListener('load', function() {
    function sendData();
    let XHR = new XMLHttpRequest();

    let formData = new FormData(document.querySelector('#form-new-operation'));

    XHR.addEventListener('load', function() {
        alert(event.target.reponseText);
    })
})
