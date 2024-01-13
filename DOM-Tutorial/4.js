//change text
//textContent and innerText
const mainHeading = document.getElementById("main-heading");

//textContent
// console.log(mainHeading.textContent);//fetch text using .textContent. op: manage your tasks hello
// mainHeading.textContent = "This is something else"; //rewrite text using .textChange by assigning the new text.

// Difference is that in textContent 'hello' was read using but in innerText 'hello' was not read. As hello is hidden so it is there but it is not displayed on screen. 

//innerText
console.log(mainHeading.innerText);//fetch text using .textContent. op: manage your tasks
mainHeading.innerText = "This is something else"; //rewrite text using .innerText by assigning the new text.
