//nested object destructing
const obj = [
  { uid: 1, uname: "aa", uno: 919191 },
  { uid: 2, uname: "bb", uno: 818181 },
  { uid: 3, uname: "cc", uno: 717171 },
  { uid: 4, uname: "dd", uno: 616161 },
];

const [{ uid }, second, { uid: thirdUid , uname}] = obj;

console.log(uid, second, thirdUid, uname);
