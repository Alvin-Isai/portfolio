import './nav.css';
import './nav_media.css';

// Mobile navbar
const mobileNav = () => {
    const mobileNav = document.createElement('nav');
    mobileNav.classList.add('mobileNav');

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    mobileNav.appendChild(hamburger);

    const menu1 = document.createElement('span');
    menu1.classList.add('menu1');
    hamburger.appendChild(menu1);
    const menu2 = document.createElement('span');
    menu2.classList.add('menu2');
    hamburger.appendChild(menu2);
    const menu3 = document.createElement('span');
    menu3.classList.add('menu3');
    hamburger.appendChild(menu3);

    const mobileContainer = document.createElement('section');
    mobileContainer.classList.add('mobileContainer');
    mobileNav.appendChild(mobileContainer);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    mobileContainer.appendChild(menu);

    const mobileHome = document.createElement('div');
    mobileHome.innerHTML = 'Home';
    mobileHome.id = 'mobileHome';
    menu.appendChild(mobileHome);
    const mobileProject = document.createElement('div');
    mobileProject.innerHTML = 'Projects';
    mobileProject.id = 'mobileProject';
    menu.appendChild(mobileProject);
    const mobileContact = document.createElement('div');
    mobileContact.innerHTML = 'Contact';
    mobileContact.id = 'mobileContact';
    menu.appendChild(mobileContact);

    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('open');
    });


    return mobileNav;
};


const nav = () => {
    // Navbar
    const nav = document.createElement('nav');
    nav.classList.add('navBar');

    const navHeader = document.createElement('h1');
    navHeader.classList.add('navHeader');
    navHeader.innerHTML = 'Alvin Lopez';

    const navLinks = document.createElement('section');
    navLinks.classList.add('navLinks');
    const navUl = document.createElement('ul');
    navLinks.appendChild(navUl);
    const link1 = document.createElement('li');
    link1.id = 'home';
    link1.innerHTML = 'Home';
    const link2 = document.createElement('li');
    link2.id = 'project';
    link2.innerHTML = 'Projects';
    const link3 = document.createElement('li');
    link3.id = 'contact';
    link3.innerHTML = 'Contact Me';
    navUl.appendChild(link1);
    navUl.appendChild(link2);
    navUl.appendChild(link3);
    
    // Append to nav element
    nav.appendChild(navHeader);
    nav.appendChild(navLinks);
    nav.appendChild(mobileNav());
    
    // For mobile only, turns navbar to different color on scroll 
    window.onscroll = function() {
        "use strict";
        if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
          nav.classList.add("scroll");
        } else {
          nav.classList.remove("scroll");
        }
    };
   
    // When function is called, appends elemetns to DOM
    document.body.appendChild(nav);
};

export default nav;
