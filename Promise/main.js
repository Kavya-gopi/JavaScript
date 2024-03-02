const obj=new Promise((resolve,reject)=>{
    let BookTicket = false;
    if(BookTicket){
        resolve();
    }
    else{
        reject();
    }
})
// obj.then(()=>console.log("Thank you buddy I will transfer the amount"))
// .catch(()=>console.log("Ok Buddy! I will book a bus"))
obj.then(success)
.catch(failure)

function success(){
    console.log("Thank you Buddy I will transfer the amount");
}

function failure(){
    console.log("Ok buddy! I will book a bus");
}

function tatkalBooking(){
    return new Promise((resolve,reject)=>{
        let BookTickets=true;
        if(BookTickets){
            resolve();
        }
        else{
            reject();
        }
    })
}

tatkalBooking().then(()=>console.log("Your Ticket is Booked"))
.catch(()=>console.log("Ok buddy! I will try in someOther way"))
