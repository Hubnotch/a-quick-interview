// The Needed dom elements

let home = document.querySelectorAll(".home")
let viewCv = document.querySelectorAll(".viewCv")
let container = document.querySelector(".container")
let myCv = document.querySelector("#myCv")

//what happens when each button is clicked
home.forEach(element => {
    element.addEventListener('click', () => {
       container.style.transform = "translateX(0)";
       myCv.style.transform = "translateX(100%)";
       container.style.overflow = "hidden";
    })
});

viewCv.forEach(element => {
element.addEventListener('click', () => {
    container.style.transform = "translateX(100%)";
    myCv.style.transform = "translateX(0)";
    myCv.style.overflow = "hidden";
})
});





