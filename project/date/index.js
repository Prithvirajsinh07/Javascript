console.log("hello Pruthvirajsinh");
let halchal = prompt("hello how are you");
console.log(`hello how are you  = ${halchal}`);
let fullName = prompt("what is your name");
console.log(`what is your name = ${fullName}`);
let date = confirm("Will you Date With me");
console.log(`Will you Date With me ${date}`);

if (date === true) {
    let time = prompt("what time to go. brackfast , lunch , dinner");
    if (time === "brackfast" || time === "Brackfast" || time === "BRACKFAST") {
        console.log("So let's meet tomorrow morning");
       } else if (time === "lunch" || time === "Lunch" || time === "LUNCH") {
        console.log("So let's meet tomorrow afternoon");
    } else if (time === "dinner" || time === "Dinner" || time === "DINNNER") {
        console.log("So let's meet tomorrow evening");
    } else{
        console.log("I don't understand anything");
    }

} else if (date === false) {
   let date1 = confirm("please Will you Date With me");
    if (date1 === true) {
        let time = prompt("what time to go. brackfast , lunch , dinner");
        if (time === "brackfast" || time === "Brackfast" || time === "BRACKFAST") {
            console.log("So let's meet tomorrow morning?");
        } else if (time === "lunch" || time === "Lunch" || time === "LUNCH") {
            console.log("So let's meet tomorrow afternoon?");
        } else if (time === "dinner" || time === "Dinner" || time === "DINNER") {
            console.log("So let's meet tomorrow evening?");
        } else{
    console.log("I don't understand anything");
        }
        
}
else{
    console.log("Sorry for asking you on a date, please forgive me")
}
}   
else{
    
}

