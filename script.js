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



gsap.from(".text", {
    x:-200,
    opacity:0,
    duration:1,
    delay:0.5,
})


gsap.from(".image img" , {
    scale : 0.97,
    yoyo:true,
    duration:2,
    repeat: -1

})


let cartIcon = document.querySelector("#cartIcon")
cartIcon.addEventListener("click" , () => {
    window.location.href = "Cart.html"
})



gsap.from(".newArrival" , {
    opacity: 0,
    duration:2,
    x:-300,
    scrollTrigger: {
        trigger:".newArrival",
        scroller:"body",
        start:"top 60%",
        
    
    }
})
gsap.from(".photos" , {
    opacity: 0,
    duration:2,
    x:300,
    scrollTrigger: {
        trigger:".photos",
        // scroller:"body",
        start:"top 60%",
        
    
    }
})
gsap.from(".Popular_item" , {
    
    opacity:0,
    duration:2,
    x:-300,
    scrollTrigger: {
        trigger:".Popular_item",
        scroller:"body",
        start:"top 60%",
        
    
    }
})


gsap.from(".Watches" , {
    
    opacity:0,
    duration:2,
    x:-300,
    scrollTrigger: {
        trigger:".Watches",
        // scroller:"body",
        start:"top 60%",
        
    
    }
})



document.querySelectorAll(".Showbtn").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "Shop.html"
  });
});



let addToCart = document.querySelectorAll(".Add-to-cart")

addToCart.forEach(elem => {
    
    elem.addEventListener("click" , function() {

         const item = {
      name: elem.dataset.name,
      price: elem.dataset.price,
      img: elem.dataset.img,
      
    };

     let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    // localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${item.name} added to cart!`);
});

})