//Block scope and function scope

//Block Scope = let, const
//function scope = var

var v1 = 1;
let l1 = 1;
const c1 = 1;

//scope
{
  var v2 = 2;
  let l2 = 2;
  const c2 = 2;

  //scope
  {
    var v3 = 3;
    let l3 = 3;
    const c3 = 3;

    //  console.log(v1); //A
    //  console.log(l1); //A
    //  console.log(c1); //A

    //    console.log(v2); //A
    //    console.log(l2); //A
    //    console.log(c2); //A

    //    console.log(v3); //A
    //    console.log(l3); //A
    //    console.log(c3); //A
  }

  //  console.log(v1); //A
  //  console.log(l1); //A
  //  console.log(c1); //A

  //    console.log(v2); //A
  //    console.log(l2); //A
  //    console.log(c2); //A

   console.log(v3); //D
  //  console.log(l3); //D
  //  console.log(c3); //D
}

//  console.log(v1); //A
//  console.log(l1); //A
//  console.log(c1); //A

// console.log(v2); //A
// console.log(l2); //D
// console.log(c2); //D

// console.log(v3); //A
// console.log(l3); //D
// console.log(c3); //D

//As we can see that v2 and v3 are in a scopes but still they are accessed outside.
//Because they are functional Scope. And l2, c2, l3 and c3 are not accessed as they are block scope.
