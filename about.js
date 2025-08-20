let nav_links = document.querySelector(".nav_links")
let nav = document.querySelector("nav")

let bars = document.querySelector("#Bars")

bars.addEventListener("click" , function(){

    nav_links.classList.toggle('active')
    nav.style.height = nav_links.classList.contains("active") ? "400px " : "80px"
    nav.style.alignItems = nav_links.classList.contains('active') ? "flex-start" : "center";
    nav_links.style.display = nav_links.classList.contains('active') ? "flex" : "none";
    nav_links.style.justifyContent = nav_links.classList.contains('active') ? "space-between" : "none";
    nav.style.paddingTop = nav_links.classList.contains('active') ? "10px" : "0px";

    gsap.from("nav" , {
        y : -100,
        duration:1,
        opacity:0,
        
        
        
    })

    // gsap.from("li" , {
    //         stagger : 0.3,
    //         x : 100,
    //         opacity: 0
    //     })

})

gsap.from(".main h1" , {
    x:-300,
    opacity:0,
    duration:2
})

let cartIcon = document.querySelector("#cartIcon")
cartIcon.addEventListener("click" , () => {
    window.location.href = "Cart.html"
})
