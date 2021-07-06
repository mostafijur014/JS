

//Expremint 
console.log(document.getElementsByClassName('item'));
let itemUl = document.getElementById("items")
let items = itemUl.getElementsByClassName('item');
for (let i =0; i<items.length; i++){
    items[i].style.color = "green"
}
let itemss = document.getElementsByTagName("h1");
console.log(itemss);
let header = document.querySelector("h1");
console.log(header)
let newTasks = document.querySelector("#new-task");
console.log(newTasks)