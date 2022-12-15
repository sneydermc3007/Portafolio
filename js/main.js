// const navMenu = document.getElementById('nav-menu');
// const navToggle = document.getElementById('nav-toggle');

const [navMenu, navToggle, navClose] = ['nav-menu', 'nav-toggle', 'nav-close'].map(
                                            id => document.getElementById(id)
                                        );

// Abre el menu                                        
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Cierra el menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Ocultar el menu al hacer click en unos de los links(ocultar el menu)
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(
    n => n.addEventListener('click', linkAction)
);
//======================================================

const [skillsContent, skillsHeader] = [
    document.getElementsByClassName('skills__content'),
    document.querySelectorAll('.skills__header')
];

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
});