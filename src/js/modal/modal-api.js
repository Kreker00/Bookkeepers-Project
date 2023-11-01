import axios from 'axios';
import { BASEURL } from './category/api-requests';

export async function getBookById(bookId) {
  const URL = `${BASEURL}${bookId}`;
  try {
    const response = await axios.get(URL);
    const bookData = response.data;

    // Збереження отриманих даних в localStorage
    const STOREDBOOKS = JSON.parse(localStorage.getItem('storedBooks')) || {};
    STOREDBOOKS[bookId] = bookData;
    localStorage.setItem('storedBooks', JSON.stringify(STOREDBOOKS));

    return bookData;
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
}
