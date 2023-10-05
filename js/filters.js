let firstFiltersBar = document.querySelector(".last-box")
let itemsLeft = document.querySelector(".items-left span")

function countComplete() {
    let arrOfCompletedTodo = []
    for(let element of todoElementsBox.children) {
        if(element.children[0].classList.contains("clicked")) {
            arrOfCompletedTodo.push(element)
        }
        
    }
    itemsLeft.innerHTML = todoElementsBox.children.length - arrOfCompletedTodo.length
    return arrOfCompletedTodo
}
countComplete()


const clearCompletedButton = document.querySelector(".clear-completed")

clearCompletedButton.addEventListener("click" , clearCompleted)

function clearCompleted() {
    countComplete().forEach(element => element.children[2].click())
}


//--------------------------------------------Desktop--------------------------------------------
const filterBarButtons = document.querySelectorAll(".filter-bar button")
const descktopAllElementsButton = document.querySelector(".filter-bar .all")
const descktopActiveElementsButton = document.querySelector(".filter-bar .Active")
const descktopCompletedElementsButton = document.querySelector(".filter-bar .Completed")

filterBarButtons.forEach(button => button.onclick = () => {
    filterBarButtons.forEach(button => button.classList.remove("active"))

    button.classList.add("active")
    
    if(button == descktopAllElementsButton) {
        for(let element of todoElementsBox.children) {
            element.style.display = "flex"
        }
    } else if(button == descktopActiveElementsButton) {
        for(let element of todoElementsBox.children) {
            if(element.children[0].classList.contains("clicked")) {
                element.style.display = "none"
            } else{
                element.style.display = "flex"
            }
        }
    } else if(button == descktopCompletedElementsButton) {
        for(let element of todoElementsBox.children) {
            if(!element.children[0].classList.contains("clicked")) {
                element.style.display = "none"
            } else{
                element.style.display = "flex"
            }
        }
    }
})


//--------------------------------------------Mobile--------------------------------------------
const mobileFilterBarButtons = document.querySelectorAll(".mobile-filter-bar button")
const mobileAllElementsButton = document.querySelector(".mobile-filter-bar .all")
const mobileActiveElementsButton = document.querySelector(".mobile-filter-bar .Active")
const mobileCompletedElementsButton = document.querySelector(".mobile-filter-bar .Completed")
//for all buttons in filterBar: when button clicked => loop for all buttons and remove class = "active"

mobileFilterBarButtons.forEach(button => button.onclick = () => {
    mobileFilterBarButtons.forEach(button => button.classList.remove("active"))

    button.classList.add("active")
    
    if(button == mobileAllElementsButton) {
        for(let element of todoElementsBox.children) {
            element.style.display = "flex"
        }
    } else if(button == mobileActiveElementsButton) {
        for(let element of todoElementsBox.children) {
            if(element.children[0].classList.contains("clicked")) {
                element.style.display = "none"
            } else{
                element.style.display = "flex"
            }
        }
    } else if(button == mobileCompletedElementsButton) {
        for(let element of todoElementsBox.children) {
            if(!element.children[0].classList.contains("clicked")) {
                element.style.display = "none"
            } else{
                element.style.display = "flex"
            }
        }
    }
})