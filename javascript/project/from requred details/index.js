const inputText = document.querySelector(".input-text");
const inputPassword = document.querySelector(".input-password");
const inputEmail = document.querySelector(".input-email");
const text = document.querySelector("#i-text");
const password = document.querySelector("#i-password");
const email = document.querySelector("#i-email");
const btn = document.querySelector(".btn");

function one (){
    if(inputText.value === ""){
text.style.visibility = "visible";
    }
    else {
        text.style.visibility = "hidden";
    }
}
function two (){
    if(inputPassword.value === ""){
password.style.visibility = "visible";
    }
    else {
        password.style.visibility = "hidden";
    }
}
function three (){
    if(inputEmail.value === ""){
email.style.visibility = "visible";
    }
    else {
        email.style.visibility = "hidden";
    }
}

function four (){
  btn.addEventListener("click" , ()=>{
one();
two();
three();
  });
}

four();