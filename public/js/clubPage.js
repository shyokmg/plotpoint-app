// Assuming you have an array of members and books for the current club
const membersData = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Doe' },
  // ... other members
];

const booksData = [
  { bookName: 'Book 1', author: 'Author 1' },
  { bookName: 'Book 2', author: 'Author 2' },
  // ... other books
];

// Assuming you have a function to compile and render the Handlebars template
const renderClubPage = (members, books) => {
  const templateSource = fs.readFileSync('path/to/clubs.handlebars', 'utf8');
  const template = Handlebars.compile(templateSource);
  const html = template({ Users: members, Books: books });

  // Assuming you have a function to render this HTML on your web page
  renderToPage(html);
};

// Call the function with your data
renderClubPage(membersData, booksData);
