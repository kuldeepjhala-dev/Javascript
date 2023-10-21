//Lexical Scope for all Const, let and var

const var1 = "myvar-1-Global";
myfun1 = () => {
  const var2 = "myvar-2-myfun1";
  myfun2 = () => {
    const var3 = "myvar-3-myfun2";
    myfun3 = function () {
      const var4 = "myvar-4-myfun3";
      //   console.log(var1); //op: myvar-1-Global
      //   console.log(var2); //op: myvar-2-myfun1
      //   console.log(var3); //op: myvar-3-myfun2
      //   console.log(var4); //op: myvar-4-myfun3
    };
    // console.log(var1); //op: myvar-1-Global
    // console.log(var2); //op: myvar-2-myfun1
    // console.log(var3); //op: myvar-3-myfun2
    // console.log(var4); //op: GENERATES ERROR
    myfun3();
  };
  //   console.log(var1); //op: myvar-1-Global
  //   console.log(var2); //op: myvar-2-myfun1
  //   console.log(var3); //op: GENERATES ERROR
  //   console.log(var4); //op: GENERATES ERROR
  myfun2();
};

// console.log(var1); //op: myvar-1-Global
myfun1();
// console.log(var2); //op: GENERATES ERROR
// console.log(var3); //op: GENERATES ERROR
// console.log(var4); //op: GENERATES ERROR
