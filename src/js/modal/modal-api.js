import axios from 'axios';
import { BASEURL } from '../category/api-requests';
import { generateBookMarkup } from './modal-bookmarkup';
import { addLinkShop } from './modal-bookmarkup';
import { saveBookToStorage } from './modal-local-storage';

export async function fetchBookById(bookId) {
  const URL_ID = `${BASEURL}${bookId}`;
  try {
    const response = await axios.get(URL_ID);
  
    const bookData = response.data;
   
    await saveBookToStorage(bookData);
    generateBookMarkup(bookData);
    addLinkShop(bookData);
  } catch (error) {
    console.error(`Error fetching book with ID ${bookId}:`, error);
    throw error;
  }
}
