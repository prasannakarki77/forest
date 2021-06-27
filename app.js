const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-comp');
const links = document.querySelectorAll('.nav-comp li');

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})