const reg =/bark/;

let name = "bark";
console.log(reg.test(name));


let animal = "i love chiken"

let eden =/c-e][e-u][d-k]/;
//let haben =/[a-z]a-z][a-z]/;

// 

//let edentest =" cub"
//let habentest = "ape, cow, ewe"

console.log(eden.test("cub"))
console.log(eden.test("dog"))
console.log(eden.test("elk"))

console.log(eden.test("ape"))

let animalName = "3 monkeys";
let regAnimalName =/ \d\s\w+/;
console.log(regAnimalName.test(animalName))

/**
 * match these strings
 * 
 * 1, 5 sloths
 * 2, 8 llamas
 * 3, 7 hyenas
 * 
 * dont match these strings
 * 1, one bird
 * 2, two owls
 * 
 */

let regAA = /\d\s\w/;
console.log(regAA.test("one bird"));



var x = 10;
function main(){
 console.log("x1 is:"+ x);
 x= 20;
 console.log("x2 is:" + x);
 if (x>0){
 var x= 30;
 console.log("x3 is:"+ x);}
 console.log("x4 is:"+ x);
 var x = 40;
 var f= function(x){
 console.log("x5 is:"+ x);
};
f(50);
 console.log ("x6 is:"+ x);}
main();
console.log("x7 is:"+ x);

console.log(main());

var funcs = [];
for (var i = 0; i < 5; i++) {
 funcs[i] = function() {
 return i;
 };
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());



























