/*
Exercise
Built a palindrome Checker
Input-'Was it a car or a cat I saw?'
Result-Palindrome
Input-'How are you'
Result-Not a Palindrome
*/
let result = document.getElementById("result");
function check() {
  const input = document.getElementById("input").value;
  console.log(input);
  let joined = input.replaceAll(" ", "");
  console.log(joined);
  let words = joined.toLowerCase();
  let arr = words.split("");
  console.log(arr);
  let revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
    //console.log(revArr);
  }
  //let revArr=arr.reverse();
  console.log(revArr);
  let joinedStr = revArr.join("");
  console.log(joinedStr);

  if (words == joinedStr) {
    res = "Palindrome";
  } else {
    res = "Not a Palindrome";
  }
  result.innerHTML = `${res}`;
}
