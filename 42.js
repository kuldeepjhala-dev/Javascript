//object inside array
//important in real world

const obj = [
  { uid: 1, uname: "aa", uno: 919191 },
  { uid: 2, uname: "bb", uno: 818181 },
  { uid: 3, uname: "cc", uno: 717171 },
  { uid: 4, uname: "dd", uno: 616161 }
];

for (let usersData of obj) {
    console.log(usersData);
}

console.log(obj[1]);

console.log(obj[1].uid);