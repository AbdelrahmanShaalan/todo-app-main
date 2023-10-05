const newTodoInput = document.querySelector("#new-todo-input");
const todoElementsBox = document.querySelector(".todo-elements");
let todoElements = document.querySelectorAll(".todo")
window.addEventListener("load" , showElements())

function showElements() {
    todoElementsBox.innerHTML = localStorage.getItem("elements")
}

function addElement() {
    todoElementsBox.innerHTML += 
    `
    <div class="todo" draggable="true">
        <span class="checkbox" onclick="spanClick(this)">
            <img src="images/icon-check.svg">
        </span>
        <p>${newTodoInput.value}</p>
        <button class="delete-todo" onclick="deleteTodo(this)"></button>
    </div>
  `
}

function spanClick(element) {
    element.classList.toggle("clicked")
    saveElements()
    countComplete()
}

function deleteTodo(element) {
    element.parentElement.remove()
    saveElements()
    countComplete()
}


function saveElements() {
    localStorage.setItem("elements" , todoElementsBox.innerHTML)
}

newTodoInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter" && newTodoInput.value != "") {
        //add todo
        addElement()
        //save  todo
        saveElements()
        //count
        countComplete()
        //reset filter to "All"
        descktopAllElementsButton.click()
        //update elements list
        newTodoInput.value = "";
    }
});