fetch('footer.html')
.then (Response => Response.text())
.then(html => {
  document.getElementById('footer').innerHTML = html;
})
.catch(error => console.error('error:', error)
);

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'data scientist ', 'Digital Marketer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


document.addEventListener('DOMContentLoaded', function(){
  const loginForm = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  //email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function validateEmail(){
    const email = emailInput.ariaValueMax.trim();

    if (email === ''){
      emailError.textContent = 'email is required';
      return false;
    }
    if (!emailRegex.test(email)){
      emailError.textContent = 'please enter a valid email adddress';
      return false;
    }
    emailError.textContent = '';
    return true;
  }
  //RTV
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

  
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const isEmailValid = validateEmail();
      });
});