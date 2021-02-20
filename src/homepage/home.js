import Portland from './portland.jpg';
import './home.css';
import './home_media.css';


const home = () => {
    const content = document.createElement('div');
    content.classList.add('homeContent');
    
    // Intro section
    const intro = document.createElement('section');
    intro.classList.add('introContainer');

    const hidden = document.createElement('h1');
    hidden.classList.add('hidden');
    hidden.innerHTML = 'Introduction';

    const introDiv = document.createElement('div');
    introDiv.classList.add('introDiv');
    const introHead = document.createElement('h2');
    introHead.classList.add('introHead');
    introHead.innerHTML = 'Welcome! My name is <br> Alvin Lopez.';
    const introPara = document.createElement('p');
    introPara.classList.add('introPara');
    introPara.innerHTML = "I'm a self taught junior web developer living in Portland, OR. Looking to be hired in front-end development."
    const media = document.createElement('div');
    media.classList.add('media');
    media.innerHTML += '<a href="https://github.com/Alvin-Isai" target="_blank"><i class="fab fa-github-square gitHome"></i></a>'
    media.innerHTML += '<a href="mailto:alvinlopez76@yahoo.com"><i class="fa fa-envelope email" aria-hidden="true"></i></a>'
    introDiv.appendChild(introHead);
    introDiv.appendChild(introPara);
    introDiv.appendChild(media);

    // Append to intro section
    intro.appendChild(hidden);
    intro.appendChild(introDiv)


    // About section
    const about = document.createElement('section');
    about.classList.add('aboutContainer');
    
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('aboutDiv');
    const aboutHead = document.createElement('h2');
    aboutHead.classList.add('aboutHead');
    aboutHead.innerHTML = 'About Me'
    const aboutPara = document.createElement('p');
    aboutPara.classList.add('aboutPara');
    aboutPara.innerHTML = 'I’m a self taught web developer looking for jobs in front-end development. I currently live in the Portland area.<br><br> I began learning in early April of 2020 when COVID-19 closed down the restaurant I was working at. Since then I have dedicated the majority of my time in learning how to become a professional web developer.<br><br> The beginning of the learning process was difficult and there were many times I wanted to quit. The feeling of finally solving a problem and seeing my finished projects kept me going and as I kept learning more and more I realized my passion for web development.<br><br> Now my goal is to work in a professional setting and learn more about proper industry techniques and becoming a better developer. I hope to be in contact soon! ';
    aboutDiv.appendChild(aboutHead);
    aboutDiv.appendChild(aboutPara);

    const imgDiv = document.createElement('div')
    imgDiv.classList.add('imgDiv');
    const image = new Image();
    image.classList.add('portland');
    image.src = Portland;
    image.alt = 'Portland sign'
    imgDiv.appendChild(image);

    // Append to about section
    about.appendChild(aboutDiv);
    about.appendChild(imgDiv);

    
    // Languages and tools
    
    const languages = document.createElement('section');
    languages.classList.add('languages');

    const languagesDiv = document.createElement('div');
    languagesDiv.classList.add('languagesDiv');
    const languagesHead = document.createElement('h2');
    languagesHead.classList.add('languagesHead');
    languagesHead.innerHTML = 'Languages <br> <i class="fa fa-code" aria-hidden="true"></i>';
    const languagesPara = document.createElement('p');
    languagesPara.classList.add('languagesPara');
    languagesPara.innerHTML = 'HTML5 <br> CSS3 <br> JavaScript <br> Ruby ';
    languagesDiv.appendChild(languagesHead);
    languagesDiv.appendChild(languagesPara);

    const toolsDiv = document.createElement('div');
    toolsDiv.classList.add('toolsDiv');
    const toolsHead = document.createElement('h2');
    toolsHead.classList.add('toolsHead');
    toolsHead.innerHTML = 'Tools <br> <i class="fa fa-code-branch" aria-hidden="true"></i>';
    const toolsPara = document.createElement('p');
    toolsPara.classList.add('toolsPara');
    toolsPara.innerHTML = 'Webpack <br> NPM <br> Terminal <br>Git & Github <br> Linux & Mac OS <br> Ruby on Rails';
    toolsDiv.appendChild(toolsHead);
    toolsDiv.appendChild(toolsPara);

    
        // Append to languages section
    languages.appendChild(languagesDiv);
    languages.appendChild(toolsDiv);


    content.appendChild(intro);
    content.appendChild(about);
    content.appendChild(languages);

    return content;
};

export default home;
