const tabMenu = document.querySelectorAll('.js-tabmenu');
const tabContent = document.querySelectorAll('.js-tabcontent ul');

if(tabMenu.length && tabContent.length) {

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  };

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  })
}


const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  
  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
})

const sections = document.querySelectorAll('.js-scroll');

const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;
    console.log(sectionTop);
    if(sectionTop < 0) {
      section.classList.add('ativo');
    }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);