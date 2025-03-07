function formValidation(element , spn,  wrong) {
        if(element.value === ""){
      spn.innerText = wrong; 
      spn.style.color = "red";
        }else{
            spn.innerText = ""; 
        }
       
    }

function focusHere (e) {
    if(e.value === ""){
        e.style.backgroundColor = "orange";
        e.style.color = "white";

          }else{
        e.style.color = "black";
        e.style.backgroundColor = "white";

              spn.innerText = ""; 
          }
}

function changeHere (e , color) {
    color.innerText = e.value ;
    // if(e.value === ""){
    //    e.style.backgroundColor = colors ;
    //       }else{
    //     e.style.color = "black";
    //     e.style.backgroundColor = "white";

    //           spn.innerText = ""; 
    //       }   
}