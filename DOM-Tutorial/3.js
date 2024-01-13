//select element using query selector

const mainHeading = document.querySelector("#main-heading");//It is same as document.getElementByID(id);
const header = document.querySelector(".header");//it will return header object with all elements which are inside header. Like nav & div.
console.log(header);
const nav_items = document.querySelectorAll(".nav-item");//it will return header object with all elements which are inside header. Like nav & div.
console.log(nav_items); //it will return an node list because there are 3 class of nav-item.

const first_nav_item_by_default = document.querySelector(".nav-item");//it will return 1st nav item class because there are 3 classes. Thus query selector will select one by default.
