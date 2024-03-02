function tossCoin(){
    return new Promise((resolve,reject)=>{
        let rand=Math.floor(Math.random()*2);
        if(rand==0){
            resolve();
        }
        else{
            reject();
        }
    })
}

tossCoin().then(()=>console.log("You Won the game Its Head"))
.catch(()=>console.log("Oops You Lost the game"));