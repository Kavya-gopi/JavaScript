//Input=[6,-5,7,-2,4,6,-1]
 //find the sum of positive numbers only

 let input=[6,-5,7,-2,4,6,-1];
 let sum=0;

 input.forEach(val=>{
    if(val>0){
        sum+=val;
    }
    //console.log(sum);
 })

 console.log(sum);