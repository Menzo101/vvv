console.log(document.body);

// getting element by id
const heading = document.getElementById("heading");
console.log(heading);

// getting element by classname
const headingTwo = document.getElementsByClassName("newText");
console.log(headingTwo);
// queryselector method

const third = document.querySelector(".third");
console.log(third);

// queryselectorAll
const fourth = document.querySelectorAll(".fourth");
console.log(fourth);

// queryselector method;
const five = document.querySelector("#five");
console.log(five);

// maniplulating element in javascript
const content = document.getElementById("heading");
// texContext
console.log(heading.textContent);
// innerHtml
let innerText = document.querySelector("#innerText");
innerText.textContent += " levy";
console.log(innerText);
// console.log(innerText.innerHTML);

// events in javascript
// inline method;

function greetUser() {
  console.log("you are welcome");
}
// second way of handing events in javscript
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function () {
  innerText = document.querySelector("#innerText");

  console.log("submitted exam");
});

// maniplulating styles in js

// let changeColor = document.querySelector("#changecolor");
let changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("dblclick", function () {
  let changeColor = document.querySelector("#changecolor");
  changeColor.style.backgroundColor = "blue";
  console.log("working");
});
