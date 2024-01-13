//get multiple elements using getElementsByClassName
//get multiple elements items using querySelectorAll

const nav_items = document.getElementsByClassName("nav-item");
console.log(nav_items); //op: HTMLCollection(3) [li.nav-item, li.nav-item, li.nav-item]

const nav_items_2 = document.querySelectorAll("nav-item");
console.log(nav_items_2); //op: NodeList []

