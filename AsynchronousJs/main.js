console.log("Hello...");

function sync(){
    console.log("Step1");
    console.log("Step2");
    console.log("Step3");
}

sync();

setTimeout(()=>console.log("Step1"),4000);
setTimeout(()=>console.log("Step2"),2000);
setTimeout(()=>console.log("Step3"),1000);

// setInterval(()=>console.log("hello"),1000);