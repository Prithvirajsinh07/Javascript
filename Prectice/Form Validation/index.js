const text = document.querySelector("#inputText");
const email = document.querySelector("#inputEmail");
const Pass = document.querySelector("#inputPas");
const number = document.querySelector("#inputTel");



function formValidation () {
    if(text.value === ""){
        document.querySelector("#write1").innerHTML = "Please enter a value";
    }else{
        document.querySelector("#write1").innerHTML = "";
    }    
    if(email.value === "" ){
        document.querySelector("#write2").innerHTML = "Please enter a value";
        
    }else{
            document.querySelector("#write2").innerHTML = "";
            
       
    }
    if(Pass.value === ""){
        document.querySelector("#write3").innerHTML = "Please enter a value";
    }else{
        document.querySelector("#write3").innerHTML = "";
    }

    if(number.value === ""){
        document.querySelector("#write4").innerHTML = "Please enter a value";
    }else{
        document.querySelector("#write4").innerHTML = "";
    }

   
}


