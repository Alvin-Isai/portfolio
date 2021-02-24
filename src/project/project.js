import './project.css';
import './project_media.css';
import restaurant from './pics/restaurant.png';
import etch from './pics/etch.png';
import facebook from './pics/facebook.png';
import nyt from './pics/nyt.png';
import rps from './pics/rps.png';
import ttt from './pics/tic-tac-toe.png';

// Creates HTML for each website link and github link icons
const createLinks = (siteLink, gitLink) => {
    const links = document.createElement('div');
    links.classList.add('links');

    const site = document.createElement('div');
    site.classList.add('site');
    site.innerHTML = `<a href=${siteLink} target="_blank"><i class="fa fa-eye siteLink" aria-hidden="true"></i></a>`;
    const siteCaption = document.createElement('p');
    siteCaption.classList.add('caption');
    siteCaption.innerHTML = 'Live View';
    site.appendChild(siteCaption);

    const git = document.createElement('div');
    git.classList.add('git');
    git.innerHTML = `<a href=${gitLink} target="_blank"><i class="fab fa-github-square gitLink"></i></a>`;
    const gitCaption = document.createElement('p');
    gitCaption.classList.add('caption');
    gitCaption.innerHTML = 'See Code';
    git.appendChild(gitCaption);

    links.appendChild(site);
    links.appendChild(git);

    return links;
};

// Creates HTML for each project
const createProject = (title, summary, background) => {

    const project = document.createElement('div');
    project.classList.add('project');


    const projectImg = document.createElement('div');
    projectImg.style.background = `url(${background}) no-repeat center`;
    projectImg.classList.add('projectImg');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    projectImg.appendChild(overlay);

    const projectCaption = document.createElement('div');
    projectCaption.classList.add('projectCaption');
    const captionHead = document.createElement('h2');
    captionHead.classList.add('captionHead');
    captionHead.innerHTML = title;
    const captionPara = document.createElement('p');
    captionPara.classList.add('captionPara');
    captionPara.innerHTML = summary;
    projectCaption.appendChild(captionHead);
    projectCaption.appendChild(captionPara);

    
    project.appendChild(projectImg);
    project.appendChild(projectCaption);

    return {project, projectImg, overlay};
};

// Addes overlay class to project element and sets links for each icon
const addOverlay = (project, siteLink, gitLink) => {
    const links = createLinks(siteLink, gitLink);
    project.overlay.appendChild(links);

    // Shows overlay on hover
    project.projectImg.addEventListener('mouseenter', () => {
        project.overlay.classList.add('show');
    });
    // Removes overlay class when mouse leaves project element
    project.projectImg.addEventListener('mouseleave', () => {
        project.overlay.classList.remove('show');
    });
};


const project = () => {
    const content = document.createElement('section');
    content.classList.add('content');

    const projectHead = document.createElement('h1');
    projectHead.classList.add('projectHead');
    projectHead.innerHTML = 'Projects that I have created.';
    content.appendChild(projectHead);

    const project1 = createProject('A Facebook Clone', 'I made a full stack Facebook clone using HTML, JavaScript, Ruby on Rails, Bulma.', facebook);
    addOverlay(project1, 'https://sleepy-spire-74355.herokuapp.com/', 'https://github.com/Alvin-Isai/odin-facebook');

    const project2 = createProject('A Restaurant Page', 'I made a responsive restaurant page using HTML, CSS, JavaScript and Webpack.', restaurant);
    addOverlay(project2, 'https://alvin-isai.github.io/restaurant-page/', 'https://github.com/Alvin-Isai/restaurant-page');

    const project3 = createProject('A New York Times clone', 'I made a clone of a NYT news article using HTML, CSS, where I learned how to use CSS grid.', nyt);
    addOverlay(project3, 'https://alvin-isai.github.io/NYT-clone/', 'https://github.com/Alvin-Isai/NYT-clone');

    const project4 = createProject('Tic-Tac-Toe ', 'A game of tic-tac-toe using HTML, CSS, and JavaScript.', ttt);
    addOverlay(project4, 'https://alvin-isai.github.io/tic-tac-toe/', 'https://github.com/Alvin-Isai/tic-tac-toe');

    const project5 = createProject('Rock-Paper-Scissors', 'A game of rock paper scissors, using HTML, CSS, and JavaScript.', rps);
    addOverlay(project5, 'https://alvin-isai.github.io/rock-paper-scissor/', 'https://github.com/Alvin-Isai/rock-paper-scissor');

    const project6 = createProject('Etch-a-Sketch', 'A simple Etch-a-Sketch on the web using, HTML, CSS, JavaScript.', etch);
    addOverlay(project6, 'https://alvin-isai.github.io/', 'https://github.com/Alvin-Isai/etch-a-sketch');

    content.appendChild(project1.project);
    content.appendChild(project2.project);
    content.appendChild(project3.project);
    content.appendChild(project4.project);
    content.appendChild(project5.project);
    content.appendChild(project6.project);

    return content;
};

export default project;