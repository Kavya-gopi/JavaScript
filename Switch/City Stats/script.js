const button=document.querySelector('button');
button.addEventListener('click',displayStats);
let resultdiv=document.createElement('div');
resultdiv.id='result';
document.getElementById('container').appendChild(resultdiv);
function displayStats(){
  const input=document.getElementById('input');
  console.log(input);
  let city=input[input.selectedIndex].value;
  console.log(city);
  let population=0,literacyRate=0,language='';
  
  switch(city){
    case 'Bengaluru':
        population=8443675,
        literacyRate=88.71,
        language='Kannada'
        break;
    case 'Chennai':
        population=6679075,
        literacyRate=89.71,
        language='Tamil'
        break;
    case 'Mumbai':
        population=8223675,
        literacyRate=90.71,
        language='Marati'
        break;
    case 'Delhi':
        population=8909876,
        literacyRate=78.71,
        language='Hindi'
        break;
    }
    let text=`The Indian City of ${city} has a population
  of ${population}. Language spoken is ${language} and literacy Rate is ${literacyRate}%`;


    document.getElementById('result').innerHTML=text;
    
    

  }
