import axios from 'axios';
import { BASEURL } from '../category/api-requests';
import { generateBookMarkup } from './modal-bookmarkup';
import { addLinkShop } from './modal-bookmarkup';
import { saveBookToStorage } from './modal-local-storage';

export async function fetchBookById(bookId) {
  const URL_ID = `https://books-backend.p.goit.global/books/${bookId}`;

  const response = await axios.get(URL_ID);

  const bookData = response.data;
  return bookData;
  
  // generateBookMarkup(bookData);
  // addLinkShop(bookData);
}
