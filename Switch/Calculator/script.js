const button=document.querySelector('button');
const input=document.getElementById('input');
console.log(input);
let resultdiv=document.createElement('div');
resultdiv.id='result';
document.getElementById('container').appendChild(resultdiv);
button.addEventListener('click',calculate);
function calculate(){
    let val=input.value;
    console.log(val);
    let arr=val.split(/[+\-*/]/);
    console.log(arr);
    let num1=parseFloat(arr[0]);
    console.log(num1);
    let num2=parseFloat(arr[1]);
    let operator = val.match(/[+\-*/]/)[0];
    console.log(operator);
    let res;
        switch(operator){
            case '+':
                res=num1+num2;
                break;
            case '-':
                res=num1-num2;
                break;
            case '*':
                res=num1*num2;
                break;
            case '/': 
                res=num1/num2;
                break;
            default:
                res="Invalid Operator"
        }
        let text=`The value is ${res}`;
        document.getElementById('result').innerHTML=text;
    
    

}