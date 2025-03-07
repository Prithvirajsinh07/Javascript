let textarea = document.querySelector("#text-area");
const charcter = document.querySelector("#charcater");
const btn = document.querySelector("button");
const word = document.querySelector("#word");
let count = 0;



function charcterValue () {
  textarea.addEventListener ("input" , ()=>{
  text = textarea.value ;
  console.log(text);
  textlength = text.length ;
  charcter.innerHTML = textlength;

  text = text.trim();
 let textword = text.split(" ");
 let clenlist = textword.filter((el)=>{
  return el !== "" ;
 })

  word.innerHTML = clenlist.length;
  
  // charchter without spaces


})
} 
charcterValue();