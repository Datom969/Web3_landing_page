
const navToggler = document.querySelector('.btn');
const navD = document.querySelector(".menu")
navToggler.addEventListener("click", () =>{
  navToggler.classList.toggle("active"); 
  navD.classList.toggle("active");
});

const navLink = document.querySelectorAll(".navLink");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu(){
  navToggler.classList.remove("active");
  navD.classList.remove("active");
}