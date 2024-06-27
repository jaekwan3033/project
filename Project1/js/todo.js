const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos =[];

const saveToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

const deleteToDo = (event) => {
    const list = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(list.id));
    list.remove();
    saveToDos();
}

const paintToDo = (newToDo) => {
    const list = document.createElement("li");
    list.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText=newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(element => {
        paintToDo(element);
    });
}