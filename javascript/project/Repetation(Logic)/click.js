
let a = 0;
function changeImage (){
 
   let img =  document.querySelector("#image");
   
     if(a == 0){
        img.src = "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";
        a++;
      }
      else if(a == 1){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQUQ6g6NjGqj3qncgsJGpxzzRrL_qDAc1qQ&s";
        a++;
     }else if (a == 2) {
      img.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";
      a=0;
     }
 
     
    // let img = document.querySelector('#image');
    // img.src = "rolls-royce.webp";
 }


