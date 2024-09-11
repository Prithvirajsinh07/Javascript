function formValidation(element , spn,  wrong) {
        if(element.value === ""){
      spn.innerText = wrong; 
      spn.style.color = "red";
        }else{
            spn.innerText = ""; 
        }
       
    }

