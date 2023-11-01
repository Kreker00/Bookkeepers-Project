import axios from 'axios';
import { BASEURL } from '../category/api-requests';

export async function fetchBookById(bookId) {
  const URL_ID = `${BASEURL}${bookId}`;
  try {
    const response = await axios.get(URL_ID);
    const bookData = response.data;
    return bookData;
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
}
