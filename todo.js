const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list")
let toDos = []
const TODES_KEY = "todos"

function savedTodo () {
    localStorage.setItem(TODES_KEY, JSON.stringify(toDos))
}
function deleteTodo (event) {
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter(item => item.id !== parseInt(li.id))
    savedTodo()
}


function paintTodo (newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.classList.add("todo-button")
    button.innerText = "delete"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
}

function submitList (event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    const newTodoObject = {
        id : Date.now(),
        text : newTodo
    }
    toDos.push(newTodoObject)
    paintTodo(newTodoObject)
    savedTodo()
}

todoForm.addEventListener("submit", submitList)

const savedTodoItem = localStorage.getItem(TODES_KEY)
if(savedTodoItem != null){
    const parsedToDos = JSON.parse(savedTodoItem)
    toDos = parsedToDos
    parsedToDos.forEach(paintTodo)
}