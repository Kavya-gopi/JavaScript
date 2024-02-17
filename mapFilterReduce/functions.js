// map/filter/Reduce/closure function/set and Map
//map-executes callback function for each array
//element and returns new array
let arr=[1,2,3,4,5,6,7,8,9,10];
let multiplesoftwo=arr.map(x=>x*2);
console.log(multiplesoftwo);

let forachof2=arr.forEach(x=>{
    console.log(x*2);
});
console.log(arr);

let priceUSD=[23,40,17];
let priceINR=priceUSD.map(x=>x*83);
console.log(priceINR);
console.log(priceUSD);
console.log("---------------------------------------")

let priceINR2=priceUSD.forEach(x=>console.log(x*83));
console.log("-----------------------------------")
//console.log(priceINR2);

let person=[
    {name:'Anusha',age:21},
    {name:'Bhavani',age:23},
    {name:'Charu',age:24},
    {name:'Deepika',age:14},
    {name:'kalai',age:26}
];

let ages=person.map(x=>x.age);
console.log(ages);

let agesUseforEach=person.forEach(x=>{
    let age=x.age;
    console.log(age);
})

//Filter-returns new array by checking each value of original array
//using call back function

let cost=[35,234,13,12,34,54,123];
let lessthan100=cost.filter(x=>x<100);
console.log(lessthan100);//[35,13,12,34,54]

let names=['kavya','abinaya','suchismathi'];
let avalue=names.filter(x=>x=='kavya');
console.log(avalue);

//arr=[4,6,2,3,1,1,3,5,7,8,4,3]
//Remove duplicates from the array.
const numbers=[4,6,2,3,1,1,3,5,7,8,4,3];
const uniqNum=numbers.filter((number,index)=>numbers.indexOf(number)===index)
console.log("RemovedArr: ",uniqNum);

//Name="Robert Andrew George"
//Result RAG
//Abbreviate by gathering first letter of each word
let name="Robert Andrew George";
let arrname=name.split(' ');
console.log(arrname);
let abb=arrname.map(x=>x.charAt(0));
// abb.reduce((total,el)=>total+el)
// console.log(abb)
console.log(abb.join(''));

//Input=[6,-5,7,-2,4,6,-1]
//Find the sum of positive numbers only

let input=[6,-5,7,-2,4,6,-1];
let sumOfVal=input.filter(x=>x>0);
console.log(sumOfVal)
let stotal=sumOfVal.reduce((total,el)=>total+el);
console.log(stotal)

//console.log("Sum of Positive numbers: ",sum);

//Returning function and Closure Function

let a=100;
function outer(name){
    let outVar='Bread';
    function inner(){
        let innerVar='Butter';
        console.log(innerVar);
        console.log(outVar);
        console.log('Welcome',name)
    }
    return inner;
}
let call1=outer('Keerthika');
call1();

//closure Function
function adder(x){
    return function(y){
        return x+y;
    }
}
let val=adder(10);
console.log(val(5));

//Set And Map
//Set
let ar=[1,2,2,3,4,5,5,6,7,7,8,9];
let mySet=new Set(ar);
console.log(mySet);
let mySet2=new Set();
mySet2.add(1);
mySet2.add(2);
mySet2.add([1,3]);
mySet2.add({'a':1,'b':2});
console.log(mySet2);
mySet2.add(1);
console.log(mySet2);
let obj={'a':1,'b':2};
mySet2.add(obj);
console.log(mySet2);

//Map
let map1=new Map();
map1.set('a',1);
map1.set('b',2);
console.log(map1);



