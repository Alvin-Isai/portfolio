import './nav.css'

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
    link1.innerHTML = 'Home';
    const link2 = document.createElement('li');
    link2.innerHTML = 'Projects';
    const link3 = document.createElement('li');
    link3.innerHTML = 'Contact Me';
    navUl.appendChild(link1);
    navUl.appendChild(link2);
    navUl.appendChild(link3);
    
    // Append to nav element
    nav.appendChild(navHeader);
    nav.appendChild(navLinks);

   
    // When function is called, appends elemetns to DOM
    document.body.appendChild(nav);
};

export default nav
