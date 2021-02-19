import './contact.css';

const contact = () => {
    const content = document.createElement('div');
    content.classList.add('contactContainer');

    const hidden = document.createElement('h1');
    hidden.classList.add('hidden');
    hidden.innerHTML = 'My contact information';

    const contactSection = document.createElement('section');
    contactSection.classList.add('myContact');
    content.appendChild(contactSection);

    // Main paragraph
    const paraDiv = document.createElement('div');
    paraDiv.classList.add('paraDiv');
    contactSection.appendChild(paraDiv);

    const para = document.createElement('h2');
    para.classList.add('para');
    para.innerHTML = 'Like what you <br> see? Lets work <br> together.';
    paraDiv.appendChild(para);

    // Main information
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('infoDiv');
    contactSection.appendChild(infoDiv);

    const myInfo = document.createElement('div');
    myInfo.classList.add('myInfo');
    infoDiv.appendChild(myInfo);

    const phone = document.createElement('p');
    phone.classList.add('myPhone');
    phone.innerHTML = '<i class="fas fa-phone"></i> (971) 400-8895';
    myInfo.appendChild(phone);
    
    const resume = document.createElement('p');
    resume.classList.add('myResume');
    resume.innerHTML = '<a href="https://docs.google.com/document/d/1cyGENANs2Jqen7X-RpNYcd5FYv-Jpiwnug6IA-r7pKc/edit?usp=sharing" target="_blank"><i class="fas fa-file"></i> My Resume</a>';
    myInfo.appendChild(resume);

    const email = document.createElement('p');
    email.classList.add('myEmail');
    email.innerHTML = '<a href="mailto:alvinlopez76@yahoo.com"><i class="fa fa-envelope"></i> alvinlopez76@yahoo.com</a>';
    myInfo.appendChild(email);

    const git = document.createElement('p');
    git.classList.add('myGit');
    git.innerHTML = '<a href="https://github.com/Alvin-Isai" target="_blank"><i class="fab fa-github-square"></i> github.com/Alvin-Isai</a>';
    myInfo.appendChild(git);

    // Form
    const form = document.createElement('form');
    form.classList.add('myForm');
    form.action = 'https://formspree.io/f/mknpeade';
    form.method = 'POST';
    infoDiv.appendChild(form);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameInput.required = true;
    nameInput.placeholder = 'Name *';
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.required = true;
    emailInput.placeholder = 'Email *';
    form.appendChild(emailInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone'
    phoneInput.id = 'phone';
    phoneInput.pattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
    phoneInput.required = true;
    phoneInput.placeholder = 'Phone *    eg. 555-555-5555';
    form.appendChild(phoneInput);

    const messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.name = 'message';
    messageInput.rows = 5;
    messageInput.placeholder = 'Message';
    form.appendChild(messageInput);

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerHTML = 'Submit';
    form.appendChild(submit);

    const status = document.createElement('div');
    status.classList.add('status');
    status.id = 'test'
    form.append(status);

    return content;
};

window.addEventListener('change', function() {
    
    var form = document.querySelector(".myForm");
    var status = document.querySelector(".status");

    // Success and Error functions for after the form is submitted
    function success() {
      form.reset();
      status.innerHTML = "Thanks for reaching out!";
      
      function fade_out() {
        status.innerHTML = '';
      };
      setTimeout(fade_out, 5000);

    };

    function error() {
      status.innerHTML = "Oops! There was a problem.";

      function fade_out() {
        status.innerHTML = '';
      };
      setTimeout(fade_out, 11000);

    };

    // handle the form submission event
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
      });
    });
  
  // helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);          
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}

export default contact;