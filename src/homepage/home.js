import Portland from './portland.jpg'
import './home.css'

const home = () => {
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
    introHead.innerHTML = 'Welcome! My name is Alvin Lopez.';
    const introPara = document.createElement('p');
    introPara.classList.add('introPara');
    introPara.innerHTML = "I'm a self taught junior web developer living in Portland, OR. Looking to be hired in front-end development."
    introDiv.appendChild(introHead);
    introDiv.appendChild(introPara);

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
    aboutHead.innerHTML = 'About Me:'
    const aboutPara = document.createElement('p');
    aboutPara.classList.add('aboutPara');
    aboutPara.innerHTML = 'FIller text here';
    aboutDiv.appendChild(aboutHead);
    aboutDiv.appendChild(aboutPara);

    const imgDiv = document.createElement('div')
    imgDiv.classList.add('imgDiv');
    const image = new Image();
    image.src = Portland;
    image.alt = 'Portland sign'
    imgDiv.appendChild(image);

    // Append to about section
    about.appendChild(aboutDiv);
    about.appendChild(imgDiv);
   

    // When function is called appends elements to DOM
    document.body.appendChild(intro);
    document.body.appendChild(about);
};

export default home
