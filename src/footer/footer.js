import './footer.css';

const footer = () => {
    const container = document.createElement('footer');
    container.classList.add('footer');

    const media = document.createElement('div');
    media.classList.add('media');
    container.appendChild(media);

    const resume = document.createElement('p');
    resume.classList.add('myResume');
    resume.innerHTML = '<a href="https://docs.google.com/document/d/1cyGENANs2Jqen7X-RpNYcd5FYv-Jpiwnug6IA-r7pKc/edit?usp=sharing" target="_blank"><i class="fas fa-file"></i></a>';
    media.appendChild(resume);

    const email = document.createElement('p');
    email.classList.add('myEmail');
    email.innerHTML = '<a href="mailto:alvinlopez76@yahoo.com"><i class="fa fa-envelope"></i></a>';
    media.appendChild(email);

    const git = document.createElement('p');
    git.classList.add('myGit');
    git.innerHTML = '<a href="https://github.com/Alvin-Isai" target="_blank"><i class="fab fa-github-square"></i></a>';
    media.appendChild(git);

    const footerPara = document.createElement('div');
    footerPara.classList.add('footerPara');
    container.appendChild(footerPara);

    const content = document.createElement('p');
    content.classList.add('footerContent');
    content.innerHTML = '2021 | Created by Alvin Lopez'
    footerPara.appendChild(content);


    // When function is called, appends elemetns to DOM
    document.body.appendChild(container);
};

export default footer