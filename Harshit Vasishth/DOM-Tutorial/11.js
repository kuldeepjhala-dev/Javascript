//Add new html element to page using js


//InnerHtml to add html element element

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo-List</li>"

// todoList.innerHTML = todoList.innerHTML + "<li>New Todo-list</li>"
todoList.innerHTML += "<li>Todo 2</li>"
todoList.innerHTML += "<li>Todo 3</li>"
//=> we should not implement or copy elements like that becuase it will create preformane issues.

//when you should use it, when you should not
//=> we can use above methods only when we want to update data of the specific element
// todoList.innerHTML = "<li>Inside data is updated</li>"