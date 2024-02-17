// function* indexGenerator(){
//     let index=1;
//     while(true){
//         yield index++;
//     }
// }

// const gen=indexGenerator();
// console.log(gen.next().value)
// console.log(gen.next().value)
function* captchaGenerator(){
    let valStr='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha='';
    while(true){
        for(let i=0;i<6;i++){
            let val=valStr.charAt(Math.floor(Math.random()*valStr.length));
            captcha+=val;
        }
        yield captcha;
        captcha='';
    }
    //console.log(captcha);
    
}
const genCaptcha=captchaGenerator();
console.log(genCaptcha.next().value);
//console.log("--------------------")
console.log(genCaptcha.next().value);
console.log(genCaptcha.next().value);
console.log(genCaptcha.next().value);
console.log(genCaptcha.next().value);