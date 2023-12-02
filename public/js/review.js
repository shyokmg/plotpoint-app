const reviewFormHandler = async (event) => {
    event.preventDefault();
  
    const review_text = document.querySelector('#review_text').value.trim();
    const review_rating = document.querySelector('#review_rating').value.trim();
  
    if (review_text && review_rating) {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ review_text, review_rating }),
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
// const signUpButton = document.querySelector('.buttons a[href="/signup"]');

// // Check if the sign-up button element exists
// if (signUpButton) {
//   // Hide the sign-up button by setting its display property to 'none'
//   signUpButton.style.display = 'none';
// }
  
  document
    .querySelector('.review-form')
    .addEventListener('submit', signupFormHandler);
  