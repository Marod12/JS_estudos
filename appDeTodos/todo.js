// iniciando aplicação
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade JS'
];*/

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// renderizando todos
function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        // excluir todo
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

// criando todo
function addTodo() {
   var todoText = inputElement.value;

   todos.push(todoText);
   inputElement.value = '';
   renderTodos();
   saveToStorage(); // salvando no storage
}

buttonElement.onclick = addTodo;


// excluir todo
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage(); // salvando no storage
}

// salvando no storage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}