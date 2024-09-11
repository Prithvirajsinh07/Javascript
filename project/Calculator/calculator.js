let screen_1 = document.querySelector('#display-1');
let screen_2 = document.querySelector('#display-2');
let display = document.querySelector('#screen-anses');

function no1 (){
    total = parseInt(screen_1.value) + parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function no2 (){
    total = parseInt(screen_1.value) - parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function no3 (){
    total = parseInt(screen_1.value) * parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function no4 (){
    total = parseInt(screen_1.value) / parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}

function no5 (){
    total = parseInt(screen_1.value) % parseInt(screen_2.value);
    console.log(total);
    display.innerHTML = total;
}