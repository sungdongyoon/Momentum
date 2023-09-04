/* TodoList 등장 */
const todoListBtn = document.querySelector(".nav_btn_todoList");
const todoList = document.querySelector(".todo_list");

todoListBtn.addEventListener("click", () => {
  todoList.classList.toggle("active");
})


/* 기능 */
const todoListForm = document.querySelector(".todo_list_add");
const todoListInput = document.querySelector(".todo_list_input");
const listUl = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}


const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
}

const addItem = (todo) => {
  if(todo.text !== '') {
    const li = document.createElement('li');
    const removeBtn = document.createElement('button');
    const completeBtn = document.createElement("button");
    const span = document.createElement('span');

    span.innerText = todo.text;
     completeBtn.innerText = '✔️';
    completeBtn.addEventListener('click', () => {
      span.classList.toggle('checkLine');
    });
    removeBtn.innerText = '❌';
    removeBtn.addEventListener('click', delItem)
   
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    listUl.appendChild(li);
    li.id = todo.id;
  }
}

const handler = (event) => {
  event.preventDefault();

  const todo ={
    id: Date.now(),
    text: todoListInput.value
  };

  todos.push(todo);
  addItem(todo);
  save();
  todoListInput.value = '';
}

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));

  if(userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  }
  todos = userTodos;
}

init();
todoListForm.addEventListener('submit', handler);




