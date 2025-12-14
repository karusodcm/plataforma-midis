const scroll = () => innerWidth - document.documentElement.clientWidth
document.documentElement.style.setProperty('--scroll-bar', scroll());


const btnleft = document.querySelector("#left")
const btnright = document.querySelector("#right")
const carrusel = document.querySelector("#mcarrusel")
const sliderselection = document.querySelectorAll(".midis-all-section");

btnright.addEventListener("click", () => moveToRight())
btnleft.addEventListener("click", () => moveToLeft())

setInterval(()=>{
    moveToRight()
},5000);

let operacion = 0;
let counter = 0;
let withimgs = 100 / sliderselection.length;

function moveToRight() {
    if (counter >= sliderselection.length - 1) {
        counter = 0;
        operacion = 0;
        carrusel.style.transform = `translate(-${operacion}%)`;
         carrusel.style.transition = "none";
         return
    }
        counter++;
        operacion = operacion + withimgs
        carrusel.style.transform = `translate(-${operacion}%)`;
        carrusel.style.transition = "all ease .1s"

}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderselection.length - 1;
        operacion = withimgs * (sliderselection.length - 1)
        carrusel.style.transform = `translate(-${operacion}%)`;
        carrusel.style.transition = "none";
        return
    } 
        operacion = operacion - withimgs
        carrusel.style.transform = `translate(-${operacion}%)`;
        carrusel.style.transition = "all ease .1s"
    

}