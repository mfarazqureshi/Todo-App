var list = document.getElementById("list")

function addTodo() {
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class","list")
    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value = ""

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","edt")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

}

function deleteItem(e) {
    e.parentNode.remove()
}

function delAll() {
    list.innerHTML = ""
}
function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue
}