// Assuming you have an array of reviews for the current book
const reviewsData = [
    { reviewer: 'John Doe', rating: 4, review_text: 'Great book!' },
    { reviewer: 'Jane Doe', rating: 5, review_text: 'Absolutely loved it!' },
    // ... other reviews
  ];
  
  // Assuming you have a function to compile and render the Handlebars template
  const renderBookPage = (book, reviews) => {
    const templateSource = fs.readFileSync('path/to/books.handlebars', 'utf8');
    const template = Handlebars.compile(templateSource);
    const html = template({ book, reviews });
  
    // Assuming you have a function to render this HTML on your web page
    renderToPage(html);
  };
  
  // Call the function with your data
  renderBookPage(bookData, reviewsData);
  