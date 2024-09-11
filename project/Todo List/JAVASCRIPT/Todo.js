const input = document.querySelector("#textInput");
const submit = document.querySelector(".submit");
const container2 = document.querySelector(".container2")

submit.addEventListener("click", () => {
    if (input.value !== "") {
        contentLoaded();
        // checkboxF();
        delet();
        editText();
        input.value = ""
    }
})

function contentLoaded() {
    container2.innerHTML += `
    <div class="main2">
    <input id="chekbox" type="checkbox" >
             <p>${input.value}</p>
          <i class="fa-solid fa-trash dustbin" style="color: #ff0000;" id="${input.value}"></i>
             <i class="fa-solid fa-pen-to-square edit" style="color: #04ff00;"></i>
             </div> 
     `
}
function checkboxF() {
    const chekbox = document.querySelectorAll("#chekbox");
    chekbox.forEach((e) => {
        e.addEventListener("click", () => {
            if (e.checked === true) {
                delet();
            }
        })

    })
}

function delet() {
    const dustbin = document.querySelectorAll(".dustbin");
    dustbin.forEach((element) => {
        element.addEventListener("click", () => {
            console.log(element.parentElement);

            element.parentElement.remove();
        })
    })
}

function editText() {
    const EditText = document.querySelector(".Edit");
    const edit = document.querySelectorAll(".edit");
    edit.forEach((element, ind) => {
        target = element.parentNode.childNodes[3];
        element.addEventListener("click", () => {
            input.value = target.innerText;
            submit.style.display = "none";
            EditText.style.display = "block";
            console.log(target);
            console.log(ind)
        })
        EditText.addEventListener("click", () => {
            target.innerText = input.value;
            console.log(target);
            submit.style.display = "block";
            EditText.style.display = "none";
            //    input.value = ""
        })


    })

   
    
}

