//classList ,add and remove, toggle classes
const sectionClasses = document.querySelector(".section-todo");

//Total 2 classes are there where there is section-todo class
console.log(sectionClasses.classList); //op: DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

//How to add class to a element
sectionClasses.classList.add('bg-dark'); //'bg-black' class is already present in css.
sectionClasses.classList.remove('bg-dark'); //Used to remove class

//inorder to check  whether a class exist in a class then we can use 'contains'
const doesClassContains = sectionClasses.classList.contains('bg-dark');//returns and in true or false.
console.log(doesClassContains);//op: false

//'toggle' property works like if the class is present in the selected class then it will remove that that class. If the class is not present then it will add that class.
sectionClasses.classList.toggle('bg-dark');
sectionClasses.classList.toggle('bg-dark');

//Please take in cosideration that the flow of classes mentioned in css file will matter, when you are adding a new class. It can be overridden.
