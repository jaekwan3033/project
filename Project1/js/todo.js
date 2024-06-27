const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
}

toDoForm.addEventListener("submit",handleToDoSubmit);