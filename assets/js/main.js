
const toggle = function() {
    document.querySelector(".home-menubar-links")
    .classList.toggle("sr-only")

    document.querySelectorAll(".home-menubar-links li").forEach(element => {
        
        element.classList.toggle("sr")
    });
}


const scroll = document.querySelectorAll(".home-menubar-links a[href^='#']")
    scroll.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
        console.log(item)

    })



function scrollToIdOnClick(event) {
    event.preventDefault()
    const element = event.target
    // console.log(element.documentElement)
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop

    window.scroll({
        top: section,
        behavior: "smooth"
    })
}