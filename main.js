  // storing variables
  const hamburger= document.querySelector(".chinedu-hamburger");
  const navMenu= document.querySelector(".chinedu-nav-menu");

//    hamburger toggling function
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})
// activating the nav menu with the hamburger
document.querySelectorAll(".chinedu-nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active")
navMenu.classList.remove("active")
}))