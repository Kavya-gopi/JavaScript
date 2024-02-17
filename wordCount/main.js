// Word count function
const inp=document.getElementById("inputvalue");
const result=document.getElementById("result");
const calculate=()=>{
    let words=inp.value;
    let len=words.length;
    result.innerHTML=`${len} words`;
}