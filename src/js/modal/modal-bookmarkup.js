import { fetchBookById } from './modal-api';

const modalContainer = document.querySelector('.modal-information');
const amazonLinkRef = document.querySelector('.modal-amazon-link');
const appleBookLinkRef = document.querySelector('.modal-applebook-link');

export function generateBookMarkup(bookData) {
  const testMarkup = `
    <img class="modal-book-image" src="${bookData.book_image}" alt="${bookData.title}" />
    <div class="modal-box">
    <h3 class="modal-book-title">${bookData.title}</h3>
    <p class="modal-author">Author: ${bookData.author}</p>
    <p class="modal-description">${bookData.description}</p>
    </div>
  `;
  modalContainer.innerHTML = testMarkup;
}

export function addLinkShop(bookData) {
  const amazon = bookData.buy_links.find(link => link.name === 'Amazon')?.url;
  const appleBook = bookData.buy_links.find(
    link => link.name === 'Apple Books'
  )?.url;
  console.log(amazon);
  amazonLinkRef.setAttribute('href', amazon);
  appleBookLinkRef.setAttribute('href', appleBook);
  return amazon, appleBook;
}

export async function getAndDisplayBookById(bookId) {
  try {
    const bookData = await fetchBookById(bookId);
    const bookMarkup = generateBookMarkup(bookData);

    modalContainer.innerHTML = bookMarkup;
  } catch (error) {
    console.error(
      `Error fetching and displaying book with ID ${bookId}:`,
      error
    );
    throw error;
  }
}
