
const toggle = function() {
    document.querySelector(".home-menubar-links")
    .classList.toggle("sr-only")

    document.querySelectorAll(".home-menubar-links li").forEach(element => {
        
        element.classList.toggle("sr")
    });
}


const scroll = document.querySelectorAll(".home-menubar-links a[href^='#port']")
    scroll.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)

    })



function scrollToIdOnClick(event) {
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const section = document.querySelector(id).offsetTop
    // console.log(section.offsetTop)

    window.scroll({
        top: section,
        behavior: "smooth"
    })
}