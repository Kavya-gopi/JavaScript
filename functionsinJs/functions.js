const num1=document.getElementById('val1');
const num2=document.getElementById('val2');
let addres,subres,mulres,divres;
//let resultdiv=document.createElement('div');
//resultdiv.id='result';

//document.getElementById('container').appendChild(resultdiv);
let res=document.getElementById('res');
function add(){
    addres=Number(num1.value)+Number(num2.value);
    res.innerHTML=addres;
}

function sub(){
    subres=Number(num1.value)-Number(num2.value);
    res.innerHTML=subres;
}

function mul(){
    mulres=Number(num1.value)*Number(num2.value);
    res.innerHTML=mulres;
}

function div(){
    divres=Number(num1.value)/Number(num2.value);
    res.innerHTML=divres.toFixed(3);
}




