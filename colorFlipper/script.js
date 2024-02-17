const color=document.getElementById("color");
console.log(color);
const button=document.querySelector('button');
console.log(button);

button.addEventListener('click',flipper)
function flipper(){
    let result='#';
    let chars='abcdef0123456789';
    for(let i=0;i<6;i++){
        //let hex=Math.floor(Math.random()*9)+1
        let charLength=chars.length;
        console.log(charLength);
        let aph;
        aph=chars.charAt(Math.floor(Math.random()*charLength))
        console.log(aph);
        //console.log(hex)
        result+=aph;
    }
    console.log(result);
    color.innerHTML=result;
    document.querySelector('body').style.backgroundColor=result;
}