function buscarGithub() {
    var inputElement = document.querySelector('input[name=user]');
    var ulElement = document.querySelector('.resultado ul');
    var pElemet = document.querySelector('.resultado p');

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
    .then(function(response) {
        var pText = document.createTextNode('Total de repositóros encontrados ' + response.data.length);
        pElemet.appendChild(pText);

        for (let value of response.data) {
            var liElement = document.createElement('li');
            var liText = document.createTextNode((value.name));
            liElement.appendChild(liText);

            ulElement.appendChild(liElement);
        }
    })
    .catch(function(error) {
        console.log('ERRO na resquisição');
        console.warn(error);
    });

    inputElement.value = '';
}