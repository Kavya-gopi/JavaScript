let str1 = "Strive not to be success, ";
let str2 = "but rather to be valued.";
console.log(str1 + str2);
console.log(str1.concat(str2));
/*
Partitioning String
slice(start index,end index)
method extracts a part of a string
method returns the extracted part in a new string
method doesnot change the original string
substring(start,end)
substr(start,end)
 */

console.log(str1.slice(0, 6));
console.log(str1.slice(0, 5));

console.log(str2.substring(2, 5));
console.log(str1.slice(1, 1)); //start==end returns empty string
console.log(str1.substr(2, 10));
console.log(str1.replace("Strive", "Aim"));
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
let text = "   Hello world";
console.log(text.trim());
text = " Hello world";
console.log(text.trimStart());
text = "Hello world    ";
console.log(text.trimEnd());

let bill = "Rs.10";
console.log(bill.length);
console.log(bill.padEnd(7, "0"));
console.log(bill.padStart(8, "s"));
console.log(str1.charAt(1));
console.log(str1.charCodeAt(1));
console.log(str1.indexOf("e"));
console.log(str1.lastIndexOf("e"));
console.log(str2.lastIndexOf("z"));
console.log(str1.search("not"));
console.log(str1.search("values"));
console.log(str1.includes("not"));
console.log(str1.startsWith("S"));
