let result = document.getElementById("result");
const displayCriteria = () => {
  const op = document.getElementsByName("Qualification");
  console.log(op);
  for (let i = 0; i < op.length; i++) {
    if (op[i].checked) {
      // document.getElementById('result').innerHTML=op[i].value;
      let edu = op[i].value;

      console.log(edu);
      if (edu == "High School" || edu == "UG")
        result.innerHTML = `Your are Eligible to apply for this Job`;
      else result.innerHTML = `Not Eligible`;
    }
  }
};
