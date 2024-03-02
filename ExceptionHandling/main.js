try{
    let num=prompt("Enter a number");
    console.log(num**2);
    if(isNaN(num))
        throw "Enter a valid Number";
    if(num=="")
        throw "Cannot be Empty"
}
catch(error){
    console.log(error);
}

