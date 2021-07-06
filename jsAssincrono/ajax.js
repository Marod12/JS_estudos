var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/marod12');
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        //console.log(JSON.parse(xhr.responseText));

        var resultado = JSON.parse(xhr.responseText);
        var preElement = document.querySelector('pre');
        var preText = document.createTextNode(resultado.login);

        preElement.appendChild(preText);
    }
}

