//function declaration
function isPositive(num){
    return num>0;
}
console.log(isPositive(-4));

function sayHello(){
    console.log('Hello');
}
sayHello();

function findProducts(a,b){
    return a*b;
}
console.log(findProducts(4,7));
console.log(findProducts);
console.log(typeof findProducts);

//default parameters
function greet(name='there'){
    console.log('hi',name);
}
greet('Ram');
greet()// it will display the result as undefined
//we can use there parameter when we donot pass any argument

//recursion-->function calling itself
//factorial--product of first n numbers
function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));

//function expression
//assigned to a variable as object
let a=100;
let isEven=function(num){
    return num%2==0;
}
console.log(isEven(5));
/*
const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>a*b;
const div=(a,b)=>a/b;
function operation(a,b,fun){
    return fun(a,b);
}
console.log(operation(10,20,add));
console.log(operation(10,20,sub));
console.log(operation(10,20,mul));
console.log(operation(10,20,div));
*/

