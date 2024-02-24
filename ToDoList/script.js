let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
        localStorage.setItem('todoList', JSON.stringify(todoList));
    })
  });  
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();

  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function resetTodo() {
  todoList = [];
  localStorage.removeItem('todoList');
  document.querySelector('.js-todo-list')
    .innerHTML = '';
}