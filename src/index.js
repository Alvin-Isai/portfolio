import home from'./homepage/home.js';
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


nav();
// home();

// document.body.appendChild(project());

document.body.appendChild(contact());

footer();
