var app = document.getElementById("app");
app.className = "container mx-auto text-center p-5";

var title = document.createElement("div");
title.className = "h1";
app.appendChild(title);
title.innerHTML = "To-Do List";

var formFill = document.createElement("input");
formFill.className = "form-control";
formFill.setAttribute('type', 'text');
app.appendChild(formFill);
formFill.addEventListener('keyup', function(){
    if (event.keyCode === 13){
        console.log('enter pressed');
        console.log(formFill.value);
    }
})


let todoItems = ["test"];
let todoList = {todoItems};

class InputData {
    constructor(item, ID, complete){
    this.item = item;
    this.ID = ID;
    this.complete = complete;
}
}

localStorage.setItem('todo', JSON.stringify(todoList));