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





let h1Text = document.querySelector(".h1_text")

let phrases = ["Watch Shop" , "Get Your Favourite Watch Now" , "Get The Best Watch From TimeZone"]

let index = 1

function changeText() {
    h1Text.textContent = phrases[index];
    gsap.from(h1Text, 
        { opacity: 0,
            x: -200,
            duration: 2
         });
    index = (index + 1) % phrases.length;
}

setInterval(changeText, 3000);







const watches = [
  {
    name: "Rolex Submariner",
    price: 12000,
    desc: "Luxury dive watch with automatic movement and stainless steel case.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Omega Speedmaster",
    price: 9500,
    desc: "Chronograph watch famously known as the Moonwatch.",
    img: "https://images.unsplash.com/photo-1588524789663-e6163803c589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T21lZ2ElMjBTcGVlZG1hc3RlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Tag Heuer Carrera",
    price: 4200,
    desc: "Elegant sports chronograph with precision engineering.",
    img: "https://images.unsplash.com/photo-1700762118431-ee3a19c75ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENhc2lvJTIwRyUyMFNob2NrfGVufDB8fDB8fHww"
  },
  {
    name: "Seiko Prospex Diver",
    price: 800,
    desc: "Durable Japanese dive watch with 200m water resistance.",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
  },
  {
    name: "Casio G-Shock",
    price: 150,
    desc: "Shock resistant digital-analog watch built for toughness.",
    img: "https://images.unsplash.com/photo-1700762118431-ee3a19c75ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENBc2lvJTIwRyUyMFNob2NrfGVufDB8fDB8fHww"
  },
  {
    name: "Tissot Le Locle",
    price: 700,
    desc: "Swiss automatic dress watch with Roman numeral markers.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1Mg0TWsjFmCsSgATi_YSitHu1qzQeNLLeQ&s"
  },
  {
    name: "Citizen Eco-Drive",
    price: 500,
    desc: "Solar-powered watch that never needs a battery change.",
    img: "https://images.unsplash.com/photo-1748188919816-56a5a371e16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnJlaXRsaW5nJTIwTmF2aXRpbWVyfGVufDB8fDB8fHww"
  },
  {
    name: "Breitling Navitimer",
    price: 8500,
    desc: "Iconic pilot’s watch with slide rule bezel for aviation.",
    img: "https://monochrome-watches.com/wp-content/uploads/2014/05/Breitling-Navitimer-01-46mm-1.jpeg"
  },
  {
    name: "Hamilton Khaki Field",
    price: 650,
    desc: "Military-inspired field watch with rugged durability.",
    img: "https://www.hamiltonwatch.com/media/catalog/product/h/6/h69439940.png"
  },
  {
    name: "Panerai Luminor",
    price: 7200,
    desc: "Italian luxury dive watch with cushion-shaped case.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSc6XtO_PxWFEBdPBd5rrqBlvEf4LT4-_XFQ&s"
  },
  {
    name: "Longines HydroConquest",
    price: 1200,
    desc: "Stylish dive watch with 300m water resistance.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwZ97qUe0Uq9q1MHIvPa5v_2FNxl63xXN5A&s"
  },
  {
    name: "Audemars Piguet Royal Oak",
    price: 25000,
    desc: "Luxury sports watch with iconic octagonal bezel.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFUDId0FXwx3aVj-Y1dDQoBIYXaX3ZymhuA&s"
  },
  {
    name: "Patek Philippe Nautilus",
    price: 30000,
    desc: "One of the most prestigious luxury sports watches.",
    img: "https://images.unsplash.com/photo-1544117519-31a4b719223d"
  },
  {
    name: "Orient Bambino",
    price: 250,
    desc: "Affordable automatic dress watch with vintage styling.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZRCoXc-ENPYJUomAShURODIetraGwIAy7A&s"
  },
  {
    name: "Fossil Grant Chronograph",
    price: 180,
    desc: "Fashionable quartz chronograph with leather strap.",
    img: "https://img.drz.lazcdn.com/static/pk/p/deea5474c5f641ce3a1cffef62d74dbe.jpg_720x720q80.jpg"
  },
  {
    name: "Hublot Big Bang",
    price: 18000,
    desc: "Luxury fusion watch with bold design and chronograph.",
    img: "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2025-03/Big-Bang-Unico-Magic-Ceramic-42-mm-Soldier.png?itok=tnwVak2e"
  },
  {
    name: "IWC Portugieser",
    price: 11000,
    desc: "Classic chronograph with elegant Portuguese design.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFWZsycLcxvLxllQaRBQm7OP52U-8MN3tuw&s"
  },
  {
    name: "Rado HyperChrome",
    price: 1600,
    desc: "Swiss ceramic watch with scratch-resistant design.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJD3MhCeA36ykLsRB2GhVwc-hwbI4voeAWOg&s"
  },
  {
    name: "Montblanc 1858",
    price: 3500,
    desc: "Vintage-inspired chronograph with mountain heritage.",
    img: "https://monochrome-watches.com/wp-content/uploads/2016/01/Montblanc-1858-Small-Seconds-10.jpeg"
  },
  {
    name: "Movado Museum Classic",
    price: 1000,
    desc: "Minimalist watch with iconic single dot dial.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2-cWghpbtyaoXq74lfxS7M0KUVlsnsIAYw&s"
  }
];

let container = document.querySelector(".Card-Container");


gsap.from(container , {
    x:-400,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:container,
        start:"top 60%",
        

    }
})


watches.forEach(watch => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = watch.img;
  img.alt = watch.name;

  const h2 = document.createElement("h2");
  h2.classList.add("WatchName");
  h2.textContent = watch.name;

  const price = document.createElement("p");
  price.classList.add("Price");
  price.textContent = `Price : $${watch.price}`;

  const desc = document.createElement("p");
  desc.textContent = watch.desc;

  const btn = document.createElement("button");
  btn.classList.add("btn1");
  btn.textContent = "Add To Cart";

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(price);
  card.appendChild(desc);
  card.appendChild(btn);

  container.appendChild(card);
});


//Sort by Price method


const sortSelect = document.getElementById("sort");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render cards
function renderWatches(data) {
  container.innerHTML = ""; // clear old cards

  data.forEach(watch => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = watch.img;
    img.alt = watch.name;

    const h2 = document.createElement("h2");
    h2.classList.add("WatchName");
    h2.textContent = watch.name;

    const price = document.createElement("p");
    price.classList.add("Price");
    price.textContent = `Price : $${watch.price}`;

    const desc = document.createElement("p");
    desc.textContent = watch.desc;

    const btn = document.createElement("button");
    btn.classList.add("btn1");
    btn.textContent = "Add To Cart";

     btn.addEventListener("click", () => {
      cart.push(watch);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${watch.name} added to cart!`);
    });



    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(price);
    card.appendChild(desc);
    card.appendChild(btn);

    container.appendChild(card);
  });
}
renderWatches(watches)


sortSelect.addEventListener("change" , function(){

    let sorted

    if(sortSelect.value === "low-high"){
        sorted = [...watches].sort(( a , b) => a.price - b.price)
    }
      else if (sortSelect.value === "high-low") {
    sorted = [...watches].sort((a, b) => b.price - a.price);
    } 
    else {
    sorted = watches; // default order
    }

    renderWatches(sorted)
})



    
let cartIcon = document.querySelector("#cartIcon")
cartIcon.addEventListener("click" , () => {
    window.location.href = "Cart.html"
})
