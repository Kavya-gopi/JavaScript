let inp = document.getElementById("val");
console.log(inp);
let result = document.createElement("div");
result.id = "res";
document.getElementById("container").appendChild(result);

function check() {
  let val = inp.value;
  if (val > 0) result.innerHTML = "True";
  else if (val == 0) {
    result.innerHTML = "Zero";
  } else {
    result.innerHTML = "False";
  }
}
