

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${index * 800}px)`;
}

// Auto slide every 3 seconds
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 3000);


function updateSlider() {
  const slideWidth = document.querySelector('.slider').offsetWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}


window.addEventListener('resize', updateSlider);


setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 5000); // slower = smoother perception


slides.style.transform = `translate3d(-${index * slideWidth}px, 0, 0)`;


  document.getElementById("copyEmail").addEventListener("click", () => {
    const email = document.getElementById("emailText").textContent;
    navigator.clipboard.writeText(email).then(() => {
      const button = document.getElementById("copyEmail");
      button.setAttribute("data-tooltip", "Copied!");
      setTimeout(() => button.setAttribute("data-tooltip", "Copy Email"), 1500);
    });
  });



  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    menu.classList.toggle("active");
  }



