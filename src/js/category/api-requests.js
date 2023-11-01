import axios from 'axios';

const BASEURL = 'https://books-backend.p.goit.global/books/';

export async function getBookCategory() {
  const URL = `${BASEURL}category-list`;
  const response = await axios.get(URL);
  return response.data;
}
