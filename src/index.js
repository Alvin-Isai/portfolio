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
    const mobileHome = document.getElementById('mobileHome');
    const projectBut = document.getElementById('project');
    const mobileProject = document.getElementById('mobileProject');
    const contactBut = document.getElementById('contact');
    const mobileContact = document.getElementById('mobileContact');
    const mobileNav = document.querySelector('.mobileNav');
    
    [ homeBut, mobileHome ].forEach(function(element) {
        element.addEventListener('click', () => {
            while (container.firstChild) {
                container.removeChild(container.firstChild)
            };
            container.appendChild(home());
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('open');
        });
     });

    [ projectBut, mobileProject ].forEach(function(element) {
        element.addEventListener('click', () => {
            while (container.firstChild) {
                container.removeChild(container.firstChild)
            };
            container.appendChild(project());
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('open');

        });
    });
    
    [ contactBut, mobileContact ].forEach(function(element) {
        element.addEventListener('click', () => {
            while (container.firstChild) {
                container.removeChild(container.firstChild)
            };
            container.appendChild(contact());
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('open');
        });
    });

})();

// Footer always appended to document
footer();
