const button = document.querySelector("button");
const input = document.getElementById("input");
const resultdiv = document.createElement("div");
resultdiv.id = "result";
//const wrapper=document.getElementById('wrapper');
document.getElementById("wrapper").appendChild(resultdiv);
button.addEventListener("click", calculate);
function calculate() {
  let consumedUnits = input.value;
  console.log(consumedUnits);
  let amount = 0;
  if (consumedUnits >= 1 && consumedUnits <= 50) {
    amount = consumedUnits * 0.75;
  } else if (consumedUnits <= 150) {
    amount = 50 * 0.75 + (consumedUnits - 50) * 1.0;
  } else if (consumedUnits <= 250) {
    amount = 50 * 0.75 + 100 * 1.0 + (consumedUnits - 150) * 1.3;
  } else {
    amount = 50 * 0.75 + 100 * 1.0 + 100 * 1.3 + (consumedUnits - 250) * 1.5;
  }
  document.getElementById("result").innerHTML = `Rs:${amount}`;
}
