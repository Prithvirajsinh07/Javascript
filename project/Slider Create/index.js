const arr = [
    {
        id : 1, 
        work :"Graphics Designer", 
        image : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        detail : "Graphic designers use art and technology to create visual concepts that convey information and evoke emotions. They use images, colors, layouts, an"
    },
    {
        id : 2, 
        work :"Web Devloper", 
        image : "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
        detail : "The tech field is rife with peculiar terms and buzzwords which, to the untrained ear, can be extremely baffling. Web development is no exception, and if you want to make it as a programmer, you need to be familiar with the industry lingo."
    }, 
    {
        id : 3, 
        work :"UI UX DESIGNER", 
        image :"https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1719705600&semt=sph", 
        detail : "UX in web design refers to the overall experience a user has while interacting with a website. It explains how easily visitors browse your website and how they feel while using it – if they find it accessible"
    }, 
    {
        id : 4, 
        work :"Haker", 
        image :"https://img.freepik.com/premium-photo/portrait-handsome-african-american-man-sweater_1098072-610.jpg", 
        detail : "White hat hackers are the one who is authorized or the certified hackers who work for the government and organizations by performing penetration testing and identifying loopholes in their cybersecurity."
    }
];

const image = document.querySelector("#image");
const work = document.querySelector("#work");
const detail = document.querySelector("#detail");

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let count = 0;

function showWinner(){
    arr[count];
    image.src =  arr[count].image;
    work.innerText = arr[count].work;
    detail.innerText = arr[count].detail;

}

function slide (){
    next.addEventListener("click" , () => {
        count++;
        if(count > arr.length -1) {
            count = 0;
                }
        showWinner();
    })
    
    prev.addEventListener("click" , () => {
        count--;
        if(count < 0) {
            count = arr.length-1;
                }
        showWinner();
    })
}


window.addEventListener("DOMContentLoaded" , () =>{
    slide();
  
});

console.log(count);






