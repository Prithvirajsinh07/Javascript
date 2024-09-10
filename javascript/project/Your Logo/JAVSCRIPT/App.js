const DarkMode = document.querySelectorAll("#dropdown");
const elements = document.querySelectorAll("h2");
const eat = document.querySelector(".t-Eat")
const Menu = document.querySelectorAll(".back-color");
const date = document.querySelectorAll(".s2-date")

// All access function 
function ModeFun() {
    DarkMode.forEach((e) => {
        e.addEventListener("click", () => {
            if (e.value === "1") {
                defult();
            }
            if (e.value === "2") {
                palevioletred();
            }
            if (e.value === "3") {
                green();
            }
            if (e.value === "4") {
                darkMode();
            }
            if (e.value === "5") {
                red();
            }
        })

    })
}
// functio exicute 
ModeFun();

// defult mode theam 
function defult() {
    document.body.style.backgroundColor = "#ebe3cd"
    document.querySelector("#red-cheaf").style.color = "black"
    eat.style.color = "#12202f"
    for (const element of elements) {
        element.style.color = "black"
    }
    for (const dates of date) {
        dates.parentElement.parentElement.style.color = "black"
    }
    for (const Menus of Menu) {
        Menus.style = `
        background-color: #ebe3cd;
       color : black;`
    }
}

// palevioletred them 
function palevioletred() {
    document.body.style.backgroundColor = "palevioletred"
    document.querySelector("#red-cheaf").style.color = "black"
    eat.style.color = "white"
    for (const element of elements) {
        element.style.color = "white"
    }
    for (const dates of date) {
        dates.parentElement.parentElement.style.color = "black"
    }
    for (const Menus of Menu) {
        Menus.style = `
         background-color: palevioletred;
        color : black;`
    }
}

// green them 
function green() {
    document.body.style.backgroundColor = "green"
    eat.style.color = "white"
    for (const element of elements) {
        element.style.color = "white"
    }
    for (const dates of date) {
        dates.style.border = "1px solid white"
        dates.parentElement.parentElement.style.color = "white"
    }
    for (const Menus of Menu) {
        Menus.style = `
         background-color: green;
        color : black;`
    }
    document.querySelector("#red-cheaf").style.color = "black"
}

// Dark Mode them
function darkMode() {
    document.body.style.backgroundColor = "black"
    eat.style.color = "white"
    for (const element of elements) {
        element.style.color = "white"
    }
    for (const dates of date) {
        dates.style.border = "1px solid white"
        dates.parentElement.parentElement.style.color = "white"
    }
    for (const Menus of Menu) {
        Menus.style = `
         background-color: black;
        color : white;`
    }
}

// Red them 
function red() {
    document.body.style.backgroundColor = "#DC143C"
    document.querySelector("#red-cheaf").style.color = "black"
    eat.style.color = "white"
    document.querySelector(".explore").style = `
         background-color: white;
        color : black;`
    for (const element of elements) {
        element.style.color = "white"
    }
    for (const dates of date) {
        dates.style.border = "1px solid white"
        dates.parentElement.parentElement.style.color = "white"
    }
    for (const Menus of Menu) {
        Menus.style = `
             background-color: #DC143C;
            color : black;`
    }
    const red = document.querySelectorAll(".color-red");
    for (const reds of red) {
        reds.style.color = "black"
    }
}