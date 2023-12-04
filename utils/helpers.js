module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_number: (numbers) => {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * numbers.length);

    // Retrieve the random number from the array using the random index
    const randomNumber = numbers[randomIndex];
    return randomNumber;
  },
};
