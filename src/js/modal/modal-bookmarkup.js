import { getBookById } from './modal-api';

function generateBookMarkup(bookData) {
  return `
    <img class="modal-book-image" src="${bookData.image_url}" alt="${bookData.title}" />
    <h3 class="modal-book-title">${bookData.title}</h3>
    <p class="modal-author">Author: ${bookData.author}</p>
    <p class="modal-description">${bookData.description}</p>
  `;
}

export async function getAndDisplayBookById(bookId) {
  try {
    const bookData = await getBookById(bookId);
    const bookMarkup = generateBookMarkup(bookData);

    const modalContainer = document.querySelector('.modal-information');
    modalContainer.innerHTML = bookMarkup;
  } catch (error) {
    console.error(
      `Error fetching and displaying book with ID ${bookId}:`,
      error
    );
    throw error;
  }
}
