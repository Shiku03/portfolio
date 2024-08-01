let openNavbarEl = document.getElementById('open-navbar')
const navBar= document.getElementById('navbar')
const closeNavbarEl = document.getElementById('close-navbar')

openNavbarEl.addEventListener("click", ()=> {
navBar.style.display=('block')
})

closeNavbarEl.addEventListener("click", ()=> {
    navBar.style.display=('none')
})