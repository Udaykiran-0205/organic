let formdata = {
}

document.getElementById('Registrationform').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const password = document.querySelector('#password').value;
  const recheckpassword = document.querySelector('#recheckpassword').value;
  
  const formdata = {
    name, 
    email, 
    phone,
    password, 
    recheckpassword
  }
  
  validateDataForm (formdata);
  
});

function validateDataForm ({
    name, email, phone, password, recheckpassword
})
{
  const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/

  const phonepattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/


  const nameError = document.querySelector('.name-error');
  const nameSuccess = document.querySelector('.name-Success');


  if (name  != "" && name.length> 2){
    //success message
    nameError.innerText = "";
    nameSuccess.innerText = "valid name";
  }else{
    //error message
    nameError.innerText = "name should be Greater than 2 characters";
  }

  if (email != "" && emailpattern.test(email)){
    console.log("valid email");
  }else{
    console.log("invalid email");
  }

  if (phone != "" && phonepattern.test(phone)){
    console.log("valid phone number");
  }else{
    console.log("invalid phone number");
  }
  
  if(password != "" && passwordpattern.test(password)){
    console.log("valid password");
  }else{
    console.log("invalid password");
  }

  if(recheckpassword && password === recheckpassword){
    console.log("password matched");
  }else{
    console.log("password mis-match")
  }

}
