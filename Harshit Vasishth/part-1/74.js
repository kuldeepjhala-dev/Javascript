//Short syntax

// const obj = {
//   id: "1",
//   name: "kuldeep",
//   about: function () {
//     console.log(this.id, this.name);
//   },
// };

const obj = {
  id: "1",
  name: "kuldeep",
  about() {
    //Short form of writing method in object
    console.log(this.id, this.name);
  },
};

obj.about.call(obj); // op: 1 kuldeep
obj.about(); //op:  1 kuldeep
