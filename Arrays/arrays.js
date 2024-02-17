let arr=[1,2,3,4,5];
let cities=["Chennai","Mumbai","Banglore"];
console.log(cities[1]);
console.log(arr.length);

//mix of int and string
let arr1=[1,2,3,"Chennai",[1,33]];
console.log(arr1);

//2D Array
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
console.log(matrix[0]);
console.log(matrix[0][1]);
console.log(matrix[2][0]);
//arrays methods
let a=['a','b','c','d','e'];
console.log(a.push('f'));//it will add the value and returns the length of the array
console.log(a);
console.log(a.pop());//it will removes the last element from the array and returns the removed element
console.log(a);
//shift and unshift
console.log(a.shift());// it will removes the start element and returns the element
console.log(a);
console.log(a.unshift('x'));// it will insert element at the start and returns the length of the array
console.log(a);
//splice
console.log(a.splice(0,1,'a'));//returns removed value
console.log(a);
delete a[2];// it will remove and shows empty in that specific index
//to delete use splice
console.log(a);

/*
splice
1st parameter--Starting index
2nd parameter--no of elements to be deleted from the starting index
3rd parameter--values tobe inserted from the start index
 */
//slice(start,end)
//ending index not included
let b=['a','b','c','d']
console.log(b.slice(1,3));

//reverse
console.log(b.reverse());
console.log(b);

//join--converts array to string
let str3=b.join("");//()any separators can be used and default is a comma
console.log(str3);

//split--converts string to array
let s="g,t,r,e";
let array=s.split(',');//['g','t','r','e']
console.log(array);
let text="Hello world";
let array1=text.split("");
console.log(array1);

//concat and spread operator
let firstArr=[1,3,2];
let secondarr=[4,5,6];
let joinedarr=[firstArr,secondarr];
console.log(joinedarr);
joinedarr=firstArr.concat(secondarr);
console.log(joinedarr);

//spread Operator
let joined=[...firstArr,...secondarr];
console.log(joined);

/*
Exercise:
Arr=[5,8,10,7,9,11]
Replace 7,9,11 with 17,19,11
Insert 100 in the beginning
Insert 200 in the last but one position
Add 1000 at the end
Insert 0 in the middle.Use arr.length to find middle position
 */

let Arr=[5,8,10,7,9,11];
Arr.splice(3,2,17,19);
console.log(Arr);
Arr.unshift(100);
console.log(Arr);
Arr.push(200);
console.log(Arr);
Arr.push(1000);
console.log(Arr);
//Insert 0 in the middle use array.length to find the middle value
console.log(Arr.length);
Arr.splice((Arr.length/2),0,0);
console.log(Arr);



