const typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Front End Developer", "Pentester",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
  
const typed2 = new Typed(".typing-2", {
    strings: ["Web Designer", "Web Developer", "Front End Developer", "Pentester",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
  
const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const scrollUpBtn = document.querySelector(".scroll-up-btn");
  
menuBtn.onclick = () => {
    nav.classList.toggle("active");
};
  
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollUpBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollUpBtn.style.display = "none";
    }
  };
  
  scrollUpBtn.onclick = () => {
    document.documentElement.scrollTop = 0;
  };
  
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  window.onscroll = () => {
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
        });
  
        const target = sec.getAttribute('id');
        document.querySelector(`nav ul li a[href*=${target}]`).classList.add('active');
      }
    });
  };