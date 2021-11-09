//openeing the navbar by clicking the hamburger
const hamBurger = document.querySelector(".mobile-navbar");
const openBar = document.getElementById("menu-bar");
const closeBar = document.querySelector(".close-bar");
openBar.addEventListener('click', function () {
    hamBurger.classList.add("show")})

closeBar.addEventListener('click', function () {
        hamBurger.classList.remove("show")
    
})
//closing the navbar by clicking the close bar.
