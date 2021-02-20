import home from './homepage/home.js';
import nav from './navbar/nav.js';
import footer from './footer/footer.js';
import project from './project/project.js';
import contact from './contact/contact.js';
import './global_styles/hidden.css';
import './global_styles/reset.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Nav always appended to document
nav();

// Switches to different pages
const switchTabs = (() => {

    const container = document.createElement('div');
    container.classList.add('mainContainer');
    document.body.appendChild(container);

    // Sets home page to default page
    container.appendChild(home());

    const homeBut = document.getElementById('home');
    const projectBut = document.getElementById('project');
    const contactBut = document.getElementById('contact');

    // Removes current page and appends new page
    homeBut.addEventListener('click', () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        };
        container.appendChild(home());
    });

    projectBut.addEventListener('click', () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        };
        container.appendChild(project());
    });

    contactBut.addEventListener('click', () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        };
        container.appendChild(contact());
    });

})();

// Footer always appended to document
footer();
