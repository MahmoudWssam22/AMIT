const entry = document.getElementById("entry")
const form = document.getElementById("form")
const ul = document.getElementById("todo-list")
const alert = document.querySelector(".alert")


const submitBtn = document.querySelector(".submit-btn")
const cancelBtn = document.querySelector(".cancel-btn")
const editBtn = document.querySelector(".edit-btn")

const clearButton = document.querySelector('.clear-btn');
const todoList = document.getElementById('todo-list');

let editedElement = null

console.log(submitBtn , cancelBtn , editBtn)
function displayAlert(message , className) {

    alert.innerText = message 
    alert.classList.add(className)

    setTimeout(() => {

        alert.innerText = "" 
        alert.classList.remove(className)

    } ,5000 )

}

function deleteItem (e) {
    e.target.parentElement.remove()
    displayAlert("One Item Has bee Removed" , "alert-success")
}

function checkItem (e) {
    const liElement = e.target.parentElement 
    const status = liElement.classList.toggle("liChecked")
    e.target.innerText = status ?  "uncheck" : "check"
}
function editItem (e) {
    submitBtn.classList.add("d-none")
    editBtn.classList.remove("d-none")
    cancelBtn.classList.remove("d-none")

    const pTag = e.target.previousElementSibling

    editedElement = pTag
    console.log(pTag)

    entry.value = pTag.innerText

    const actions = document.querySelectorAll("i")
    actions.forEach((ele) => {
        ele.classList.add("d-none")
    })

}

function clearItems() {
    // Set the inner HTML of the todo list to an empty string
    todoList.innerHTML = '';
}

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const li = document.createElement("li")
    li.classList.add("list-item")

    const pTag = document.createElement("p")
    const value = entry.value
    if (value) {
    pTag.innerText = value
    pTag.classList.add("text")

    const editI = document.createElement("i")
    editI.classList.add("bx")
    editI.classList.add("bxs-edit")
    editI.innerText = "edit"
    editI.addEventListener("click" , editItem)


    const checkI = document.createElement("i")
    checkI.classList.add("bx")
    checkI.classList.add("bx-check")
    checkI.innerText = "check"
    checkI.addEventListener("click" , checkItem)

    const trashI = document.createElement("i")
    trashI.classList.add("bx")
    trashI.classList.add("bxs-trash")
    trashI.innerText = "delete"
    trashI.addEventListener("click" , deleteItem)


    li.append(pTag)
    li.append(editI)
    li.append(checkI)
    li.append(trashI)

    ul.append(li)

    displayAlert( "One Item Has Been Added"  ,"alert-success" )


    entry.value = null

    }else {
        displayAlert("No Data Provided"  , "alert-danger")
    }

})

editBtn.addEventListener("click", (e) => {
    // TODO : handle empty value 
    if (entry.value == -1) {
        // TODO : Alert
        displayAlert("NO DATA PROVIDED" , "alert-danger");
        return;
    }
    editedElement.innerText = entry.value;

    restoreDefault();
});

function restoreDefault() {
    submitBtn.classList.remove("d-none") 
    editBtn.classList.add("d-none") 
    cancelBtn.classList.add("d-none") 

    const actions = document.querySelectorAll("i")
    actions.forEach((ele) => {
        ele.classList.remove("d-none")
    })
    entry.value = null
    editedElement = null
}

cancelBtn.addEventListener("click" , restoreDefault)
clearButton.addEventListener('click', clearItems);


// TODO : Handle Clear button 
