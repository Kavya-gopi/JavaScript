// celcius to fahrenheit
function convert(){
    const celcius=Number(document.getElementById("inp").value);
    const fahrenheit=(celcius*1.8)+32;
    const output=document.getElementById("out");
    output.innerHTML=fahrenheit.toFixed(3);
}