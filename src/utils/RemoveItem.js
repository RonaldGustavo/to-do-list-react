export const removeBook = (arr, id) => {
  return arr.filter((book) => book.id !== id);
};
