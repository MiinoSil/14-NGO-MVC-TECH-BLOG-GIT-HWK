const signupUN = document.querySelector('#username-signup');
const signupPW = document.querySelector('#password-signup');

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = signupUN.value.trim();
    const password = signupPW.value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        console.log(err);
      };
    };
};
  
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);