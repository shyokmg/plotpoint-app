const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const club_id = document.querySelector('#club-signup').value.trim();
  
    if (first_name && last_name && username && email && password && club_id) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, username, email, password, club_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
// Select the sign-up button element
const signUpButton = document.querySelector('.buttons a[href="/signup"]');

// Check if the sign-up button element exists
if (signUpButton) {
  // Hide the sign-up button by setting its display property to 'none'
  signUpButton.style.display = 'none';
}
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  