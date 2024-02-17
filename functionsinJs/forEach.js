let arr=['deepa','suresh','ramya'];
arr.forEach(print);
function print(val){
    console.log(val.toUpperCase());
    
}
//using arrow function
arr.forEach(val=>{
    console.log(val);
})
//add elements to a list in HTML using forEach
 let arr1=['ECE','CSE','IT','EEE','MECH','CIVIL'];
 arr1.forEach(val=>{
    let opt=document.createElement('option');
    opt.innerHTML=val;
    opt.value=val;
    document.getElementById('branch').appendChild(opt);

 })

 

 




