let user1={
    name:'Rahul',
    age:23,
    login(){
        console.log(`Hi ${this.name}`);
        console.log("You are Logged in")
    },
    logout(){
        console.log("You are Logged Out");
    }
}

let user2={
    name:'Ramesh',
    age:34,
    login(){
        console.log(`Hi ${this.name}`);
        console.log("You are Logged In");
    },
    logout(){
        console.log("You are Logged Out");
    }
}
user1.login();
user2.login();

class User{
    //static 
    static numberOfusers=0;
    constructor(name,age){
        this.name=name;
        this.age=age;
        User.numberOfusers++;
    }
    login(){
        console.log(`Hi ${this.name}`);
        console.log("You are Logged In");
    }
    logout(){
        console.log("You are Logged Out");
    }
}

let user3=new User('Kavya',21);
user3.login();
let user4=new User('keerthi',23);
user4.login();
console.log(User.numberOfusers);

//get and set

class Bank{
    constructor(name,acc_no){
        this._acc_no=acc_no;
        this._name=name;
    }
    get acc_no(){
        return this._acc_no;
    }
    get name(){
        return this._name;
    }

    set acc_no(num){
        this._acc_no=num;
    }
    set name(name){
        this._name=name;
    }

}

let bankuser1=new Bank('kavi',8990);
console.log(bankuser1);
console.log(bankuser1.name)
