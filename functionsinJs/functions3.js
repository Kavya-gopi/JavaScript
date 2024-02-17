//callBack-function passed as parameter
// const greetConsole=(name)=>console.log('Hello ',name);
// const greetHeading=(name)=>document.querySelector('h1').innerHTML=`Hello ${name}`;

// function greet(fun){
//     return fun('Kavya');
// }

// greet(greetConsole);
// greet(greetHeading);
function greetConsole(name){
    console.log('Hello',name);

}
function greetHeading(name){
    document.querySelector('h1').innerHTML=`Hello ${name}`;
}

function greet(fun){
    console.log(fun);
    return fun('kavya');
}
greet(greetConsole);
greet(greetHeading);

function sayHello(name){
    console.log('Hello',name);
}
function helloinHtml(name){
    document.querySelector('h2').innerHTML=`Hello ${name}`;

}

function greeting(callback){
    return callback('Keerthi');
}

greeting(sayHello);
greeting(helloinHtml);

const button=document.querySelector('button');

//button.addEventListener('click', check);

// function adEVent(type, callBack){
//     if(type === 'click') //do Some code

//     else if(type === 'mousedown') // do
// }

button.addEventListener('click', function(){
    const inptVal = document.getElementById('val').value;
    check(inptVal, isPositive);

    // let status;

    // if(val>0)
    //     status = true;
    // else if(val==0)
    //     status = 'zero'
    // else
    //     status = false;
    // callBack(status);

});

button.addEventListener('click', func);

function func(){
    const inptVal = document.getElementById('val').value;
    check(inptVal, isPositive);
}

// const btns = document.querySelectorAll('button');

// btns.forEach((btn) => {
//     btn.addEventListener('click', check);
// })

function forEach1(callBack){
    //Some Code to fetch Single node
    callBack(singlenode);
}

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(){
//         check(isPositive)
//     });
// })


function isPositive(status){
    document.getElementById('rslt-field').textContent = 'You have entered the ' + status + ' number';
}

function check(val, callBack){
    //let valinp=document.querySelector('input').value;
    let status;

    if(val>0)
        status = true;
    else if(val==0)
        status = 'zero'
    else
        status = false;
    callBack(status);  //isPositive(status)
}
