const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
// const button=document.querySelector('button');

form.addEventListener('submit',(e)=>{
   if(!validateInputs()){
     e.preventDefault();
   }
})

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success=true;
    if(usernameVal===''){
        success=false;
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailVal===''){
        success=false;
        setError(email,'Email is required');
    }

    else if(!ValidateEmail(emailVal)){
        success=false;
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }

    if(passwordVal===''){
        success=false;
        setError(password,'Password is required');
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'Password must be atleast 8 characters');
    }
    else{
        setSuccess(password);
    }
    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'Confirm password is required');
    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        setError(cpassword,'Password not matched');
    }
    else{
        setSuccess(cpassword);
    }
    return success;

    

}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    // return (false)
}