const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const loginButton = document.querySelector('.buttons a[href="/login"]');

// Check if the sign-up button element exists
if (loginButton) {
  // Hide the sign-up button by setting its display property to 'none'
  loginButton.style.display = 'none';
}

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);