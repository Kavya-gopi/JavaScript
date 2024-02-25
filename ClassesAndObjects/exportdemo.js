class Car{
    constructor(model,price){
        this.model=model;
        this.price=price;
    }
}

function fillgas(){
    console.log("Filling Gas");
}

function driving(){
    console.log("You can take a test Drive");
}

export default Car;
export {fillgas,driving};