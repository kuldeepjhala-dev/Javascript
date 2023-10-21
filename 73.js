//Arrow function and this keyword

const obj = {
  id: "1",
  name: "kuldeep",
  about: function () {
    //function is created with function keyword
    console.log(this.id, this.name);
  },
};

obj.about.call(obj); // op: 1 kuldeep
obj.about(); //op:  1 kuldeep

const obj2 = {
  id: "2",
  name: 1,
  about: () => {
    //arrow function is used here
    //   console.log(this);//op: window object
    console.log(this.id, this.name);
  },
};

obj2.about.call(obj2); // op: undefined ''
obj2.about(); //op: undefined ''
// This is happening because when we use arrow function then 'this' inside arrow funciton points to window object.
//So dont use arrow function in object while using this else it will point to window object.
