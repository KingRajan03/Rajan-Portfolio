


/*===== SHOW MENU =====*/
const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu"),
      navClose = document.querySelector(".nav_close");

// Show Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide Menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*===== NAVBAR TRANSPARENT ON SCROLL =====*/
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});


// const navToggle = document.querySelector(".nav_toggle"),
//       navMenu = document.querySelector(".nav_menu");


//     navToggle.addEventListener("click", () => {
//         navMenu.classList.toggle("show-menu");
//         navToggle.classList.toggle("active");
//     })

// // Select all navigation links
// const navLinks = document.querySelectorAll('.nav_link'); // adjust selector if yours is different
// const navMenu = document.querySelector('.nav_menu'); // your menu class
// const navToggle = document.querySelector('.nav_toggle'); // the open button
// const navClose = document.querySelector('.nav_close'); // the close button

// // When a link is clicked, close the menu
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu'); // remove open menu class
//   });
// });

// /*===== TYPING TEXT =====*/

    var typed = new Typed(".profession_text", {
        strings: [" Web Developer ", " Software Developer ", " Machiene Learning "],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true,
    })


/*===== COUNTER =====*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
    
      const updateCounter = () => {
        const target = +counter.getAttribute("data-counter");
        const c = +counter.innerText;
    
        const increment = target / 200;
    
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 40);
        } else {
          counter.innerText = target;
        }
      };
    
      updateCounter();
    });
    

    /*===== SWIPER =====*/

    var swiper = new Swiper(".brand_container", {
        slidesPerView: 2,
        spaceBetween: 50,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },

          loop: true,
      });


/*===== BACK TOP BUTTON =====*/

      const back_btn_top = document.querySelector(".btn-top");

      window.addEventListener("scroll", () => {
        if(window.scrollY >= 50){
           back_btn_top.classList.add("active")
        }else{
            back_btn_top.classList.remove("active")
        }
      })



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
//     reset: true
});

function javaProject(){

}

sr.reveal('.home_content, .about_banner, .brand_container, .copyright',{}); 
sr.reveal('.about_content, .contact_container, .skills_wrapper, .count_wrapper',{delay: 500}); 
sr.reveal('.social_list,.title_wrapper, .work_list',{ interval: 250}); 
sr.reveal('.service_item, .team_item, .work_item, .input_field',{interval: 250}); 

