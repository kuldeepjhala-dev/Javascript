//get and set attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));//op: #home
console.log(link.getAttribute("href").slice(1)); //op: home

link.setAttribute("href", "www.codeprog.com");
console.log(link.getAttribute("href"));//op: www.codeprog.com

const inputElement = document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"));//op: text
