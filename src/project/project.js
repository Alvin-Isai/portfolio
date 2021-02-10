import './project.css';

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

    return {project, projectImg};
};

// Addes overlay class to project element and sets links for each icon
const addOverlay = (project, siteLink, gitLink) => {
    project.projectImg.addEventListener('mouseenter', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        project.projectImg.appendChild(overlay);

        const links = createLinks(siteLink, gitLink);
        overlay.appendChild(links);

        // Removes overlay class when mouse leaves project element
        project.projectImg.addEventListener('mouseleave', () => {
            project.projectImg.removeChild(overlay);
        });
    });
};


const project = () => {
    const content = document.createElement('section');
    content.classList.add('content');

    const projectHead = document.createElement('h1');
    projectHead.classList.add('projectHead');
    projectHead.innerHTML = 'Projects that I have created.';
    content.appendChild(projectHead);

    // const project1 = createProject('A Facebook Clone', 'I made a facebook clone using HTML, Bulma, Ruby on Rails, Facebook API', facebook);
    // addOverlay(project1, 'https://sleepy-spire-74355.herokuapp.com/', 'https://github.com/Alvin-Isai/odin-facebook');

    // content.appendChild(project1.project);

    return content;
};

export default project;