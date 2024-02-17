let arr=['ECE','CSE','IT','EEE','MECH','CIVIL']
//display the array Elements to a dropDown in HTML.

let select=document.createElement('select');
let main=document.getElementById('wrap').appendChild(select);
console.log(main);
let option;

for(let opt of arr){
    option=document.createElement('option');
    select.appendChild(option);
    option.value=opt;
    option.innerHTML=opt;
}


