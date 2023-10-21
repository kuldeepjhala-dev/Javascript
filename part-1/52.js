//rest parameters

function print(a, b, ...c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}

function addNos(...nos) {
    let total = 0;
    for (let no of nos){
        total = total + no;
    }
    console.log(total);
}


print(1, 2, 3, 4, 5);
addNos(1, 2, 3, 4, 5);
