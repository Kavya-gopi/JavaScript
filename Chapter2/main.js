function convert(){
    const cm=Number(document.getElementById("input").value);
    const inchVal=cm/2.54;
    const result=document.getElementById("result");
    result.innerHTML=inchVal.toFixed(3)+" inches";

}