// Selecting HTML tags.
const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// Constant Value
const TODOS_KEY = "todos";

// This will save todo-list added by user.
let toDos =[];

// saves todo-list added by user to local storage with JSON.stringify.
const saveToDos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

// deletes todo-list added by user from local storage and HTML. 
const deleteToDo = (event) => {
    const list = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(list.id));
    list.remove();
    saveToDos();
}

// This will create a HTML as below
//  <li><span>user-info</span><button></button></li> 
// new ID will be added to <li> tag. 
// <span> will take info submitted by user. 
// <button> will delete the user added info if clicked.
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

// This will run if user submit the data
// save user value and run paintToDo, saveToDo, and
// add user value to todo-list.
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

// event listener
toDoForm.addEventListener("submit",handleToDoSubmit);

// this checks any items saved in the local storage from browser
const savedToDos = localStorage.getItem(TODOS_KEY);

// if there is anything saved in the local storage
// it will add todo-list saved in the local storage to HTML
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(element => {
        paintToDo(element);
    });
}