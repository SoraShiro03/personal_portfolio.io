let btn = document.querySelector(".btn")
// let active_0 = document.querySelector(".active--0")
// let active_1 = document.querySelector(".active--1")

let container = document.querySelector(".container")
btn.addEventListener('click', function(){
   for (i = 1; i < 5; i++){
      document.querySelector(`.box${i}`).classList.toggle("hidden") && document.querySelector(`.box${i}`).classList.toggle("fadeIn") 
      
   }
   container.classList.toggle("fadeIn")
   container.classList.toggle("hidden")

})