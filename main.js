//DOM part1

console.dir(typeof(document));
console.dir(document);
console.dir(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.head);
console.log(typeof(document.head));
console.log(document.body);
document.title = 'Play with DOM'
console.log(document.all);
for(let element of document.all){
    console.log(element);

}
console.log(document.all[4]);

//DOM part2
console.log(document.getElementById("demo"));
let headerElement = document.getElementById("header");
headerElement.textContent = "Change Text";
headerElement.innerText = "Hello World"
console.log(headerElement.textContent);


//headerElement.style.color = "red";

console.dir(document);
 
console.log(document.getElementsByClassName("headerName"));
let headerNames = document.getElementsByClassName("headerName")
for (let i = 0 ; i<headerNames.lenght; i++){
    headerNames[i].style.color = "red";
}


var x = 10;
var y = 5;
var z = x+y;
console.log(z);

var myName = "Md Mostafijur Rahman";
console.log(myName);
var firstName = "MR";
var lastName = "Mostafij";

var fullName = firstName + " " + lastName;
console.log(fullName);

var x = 20;
var y = 5;
console.log(x + x)

let a = 22;
let b = 12;
let c = 23;
let d = a + b + c;
console.log(d)
let e = c % c;
console.log(e)

const myName = 3;
console.log(myName)