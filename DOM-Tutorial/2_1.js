//dom tree traversing

const rootNode = document.getRootNode();
// console.log(rootNode);//op : #document
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode); //op: html
// console.log(htmlElementNode.childNodes); //op: NodeList(4) [link#dark-mode, head, text, body]
//child relationship
const headNode = htmlElementNode.childNodes[1]; 
const textNode = htmlElementNode.childNodes[2];
const bodyNode = htmlElementNode.childNodes[3];

// console.log(headNode);
// console.log(textNode);
// console.log(bodyNode);

//parent relationship
// console.log(headNode.parentNode); //op: html

//sibling relationship (.nextSibling => considers text node) , (.nextElementSibling => skips text Node)
// console.log(headNode.nextSibling);//op: text
// console.log(headNode.nextSibling.nextSibling);//op: body
// console.log(headNode.nextSibling.nextSibling.nextSibling);//op: null

// console.log(headNode.childNodes); //op: NodeList(5) [text, title, text, script, text]
// console.log(headNode.childNodes[0].nextElementSibling); //op: title
// console.log(headNode.childNodes[0].nextElementSibling.nextElementSibling); //op: script

const h1 = document.querySelector("h1");
console.log(h1); //op: h1
const h1_parent = h1.parentNode; 
console.log(h1_parent); //op: container

h1_parent.style.backgroundColor = "grey"; //It will change color of container. Dont use '-' in property instead use camelCase.
h1_parent.style.color = "#333";

//for directly selecting body
const body = document.body;
console.log(body);
body.style.backgroundColor = "#efefef";

const head = document.querySelector("head");
console.log(head);
//applied query selector on head
const title = head.querySelector("title");
console.log(title);

//if you want to only fetch the elements from the parent node childrens and elimante text nodes then use 'children'
const container = document.querySelector(".container");
console.log(container.childNodes);//op: NodeList(5) [text, h1, text, p, text]
console.log(container.children);//op: HTMLCollection(2) [h1, p]

