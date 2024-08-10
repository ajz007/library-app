import axios from 'axios';

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&page=1`);
    return response.data.docs;
  } catch (error) {
    throw new Error('Failed to fetch search results.');
  }
};
