//=> There are 4 types of scopes in javascript
// 1. Gloabl scope
// 2. Function Scope
// 3. Lexical Scope
// 4. Block Scope

//var let and const are keywords to declare a variable or functions in javascript.
//It represents scopes directly

//=> var
//var if in function-Scope then memory alloted to local-Scope
//var if in gloabl-scope or block-scope then memory alloted to gloabl-scope
//If we declare multiple variables with var with the same name then only then only one variable is created in gloabl scope and the latest value is assigned to it.

//=> let & const
//let & const if in function-Scope then memory alloted to local-Scope
//let & const if in gloabl-scope then memory alloted to script-object which is inside gloabl-scope. When gloabl execution context is deleted then at that time script-object will be deleted.
//let & const if in block-scope then memory alloted to block-object, that block-object is also in the gloabl-scope.