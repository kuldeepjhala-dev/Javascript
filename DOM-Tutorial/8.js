//Iterating the nodeList and collections

//Array Like object means that we can iterate through index, use length property

//Collections

//we can use
//simple for loop,
//for of loop,
//forEach loop (by converting collections into array)

// const nav_items_collections = document.getElementsByTagName("a");
// console.log(nav_items_collections);

// for (i = 0; i < nav_items_collections.length; i++){
//     nav_item = nav_items_collections[i];
//     nav_item.style.backgroundColor = "#fff";
//     nav_item.style.color = "green";
//     nav_item.style.fontWeight = "bold";
// }

// for (let nav_item of nav_items_collections) {
//     nav_item.style.backgroundColor = "#fff";
//     nav_item.style.color = "green";
//     nav_item.style.fontWeight = "bold";
// }

//Cannot use directly with forEach loop.
//Convert the collections into array

// let nav_items_collections_array = Array.from(nav_items_collections); //converted into array
// console.log(Array.isArray(nav_items_collections_array)); //op: true

// nav_items_collections_array.forEach((nav_item) => {
//     nav_item.style.backgroundColor = "#fff";
//     nav_item.style.color = "green";
//     nav_item.style.fontWeight = "bold";
// })

//nodeList

//we can use
//simple for loop,
//for of loop,
//forEach loop 

const nav_items_nodeList = document.querySelectorAll("a");
console.log(nav_items_nodeList);

// for (i = 0; i < nav_items_nodeList.length; i++){
//     nav_item = nav_items_nodeList[i];
//     nav_item.style.backgroundColor = "#fff";
//     nav_item.style.color = "green";
//     nav_item.style.fontWeight = "bold";
// }

// for (let nav_item of nav_items_nodeList) {
//     nav_item.style.backgroundColor = "#fff";
//     nav_item.style.color = "green";
//     nav_item.style.fontWeight = "bold";
// }

//we can use directly with forEach loop.
//No need to convert the nodeList into array

nav_items_nodeList.forEach((nav_item) => {
    nav_item.style.backgroundColor = "#fff";
    nav_item.style.color = "green";
    nav_item.style.fontWeight = "bold";
})