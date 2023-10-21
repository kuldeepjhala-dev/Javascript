//find() - Array Method

const names = ["car", "wine", "dog"];
const length3 = names.find((name) => {
  return name.length == 4;
});
console.log(length3); //op: wine

const users = [
  { uid: 1, uname: "kuldeep" },
  { uid: 2, uname: "Rahul" },
  { uid: 3, uname: "Mohan" },
];

const userid3 = users.find((user) => user.uid == 3);
console.log(userid3); //op:{uid: 3, uname: 'Mohan'}
