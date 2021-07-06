function buscarGithub() {
    var inputElement = document.querySelector('input[name=user]');
    var ulElement = document.querySelector('.resultado ul');
    var pElemet = document.querySelector('.resultado p');

    var liCarregando = document.createElement('li');
    liCarregando.setAttribute('id', 'carregando');
    var liText = document.createTextNode('Carregando...');
    liCarregando.appendChild(liText);
    ulElement.appendChild(liCarregando);

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
    .then(function(response) {
        ulElement.removeChild(liCarregando);
        for (let value of response.data) {
            var liElement = document.createElement('li');
            var liText = document.createTextNode((value.name));
            liElement.appendChild(liText);

            ulElement.appendChild(liElement);
        }
    })
    .catch(function() {
        ulElement.removeChild(liCarregando);
        
        var pText = document.createTextNode('Usuário não existe no Github');
        pElemet.appendChild(pText);
    });

    inputElement.value = '';
}