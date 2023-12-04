const reviewFormHandler = async (event) => {
    event.preventDefault();
  
    const review_text = document.querySelector('#review_text').value.trim();
    const book_rating = document.querySelector('#book_rating').value.trim();
  
    if (review_text && book_rating) {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ review_text, book_rating }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.review-form')
    .addEventListener('submit', reviewFormHandler);
  