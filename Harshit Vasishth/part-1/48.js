//Function inside Function

const myfun = (a, b) => {
  const sayHello = () => console.log("hii");

  const addTwo = (a, b) => {
    return a + b;
  };

  function multiply(a, b) {
    console.log(a * b);
  }

  console.log(addTwo(a, b));

  multiply(a, b);

  sayHello();
};

myfun(2, 3);


