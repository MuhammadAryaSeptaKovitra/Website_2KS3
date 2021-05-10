const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menutoggle.addEventListener("click", function () {
      nav.classList.toggle("slide");
      });

function dis(val){
    const display = document.getElementsByTagName("input")[1];
    display.value += val;
}

function solve(){
    const display = document.getElementsByTagName("input")[1];
    let x = display.value;
    let y = eval(x);
    display.value = y;
}

function per(){
    const display = document.getElementsByTagName("input")[1];
    let x = display.value;
    let y = eval(x);
    return 1/y;
}

function x2(){
    const display = document.getElementsByTagName("input")[1];
    let x = display.value;
    let y = eval(x);
    return Math.pow(y,2);
}

function x3(){
    const display = document.getElementsByTagName("input")[1];
    let x = display.value;
    let y = eval(x);
    return Math.pow(y,3);
}

function xabs(){
    const display = document.getElementsByTagName("input")[1];
    let x = display.value;
    let y = eval(x);
    return Math.abs(y);
}