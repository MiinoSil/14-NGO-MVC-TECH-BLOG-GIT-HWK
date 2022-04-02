const UN = document.querySelector('#username-login');
const PW = document.querySelector('#password-login');

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = UN.value.trim();
    const password = PW.value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);