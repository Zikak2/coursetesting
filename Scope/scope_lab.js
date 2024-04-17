// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
function show (){
var functionkVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}

// Global scope
console.log(functionVar); // Output: "I'm a global variable"
console.log(functionLet); // Output: "I'm also global, but scoped with let"
console.log(functionConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);