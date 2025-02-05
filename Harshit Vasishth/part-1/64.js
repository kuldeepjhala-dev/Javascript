//splice Method
// splice(start, delete, insert) -> syntax

const nos = ["i1", "i2", "i3"];

//delete
const deletedItem = nos.splice(1, 1);
console.log(deletedItem); //op: ['i2']
console.log(nos); //op: ['i1', 'i3']

//insert
nos.splice(1, 0, "i2", "i2.2", "i2.3");
console.log(nos); //op:['i1', 'i2', 'i2.2', 'i2.3', 'i3']

