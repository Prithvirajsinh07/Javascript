let btn = document.querySelectorAll("button");
let input = document.querySelector("input")
let string = "";


let arr = Array.from(btn);

 arr.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        if(e.target.innerText === "="){
string = eval(string);
input.value =string;
        }
        else if (e.target.innerText === "AC"){
            string = ""
            input.value = string;
        }
        else if (e.target.innerText === "DE"){
       string =  string.slice(0 , string.length -1 );
       input.value = string;
        }
     else{
        string +=  e.target.innerText
        input.value = string;
     }

    })

 });
