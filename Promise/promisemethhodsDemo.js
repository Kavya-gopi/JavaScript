let vidya=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,3000,"Vidya Reached");
    }
    else{
        reject("Vidya not Reached");
    }
})

let latha=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,1000,"Latha Reached");
    }
    else{
        reject("Latha not Reached");
    }
})

let rekha=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,2000,"Rekha Reached");
    }
    else{
        reject("Rekha not reached");
    }
})

/*Promise.all([vidya,latha,rekha])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))*/

Promise.race([vidya,latha,rekha])//first false will display otherwise first reached mesaage will display
.then((message)=>console.log(message))
.catch((message)=>console.log(message));

//promise will be three stages 1.Pending 2.Fulfilled 3.rejected

