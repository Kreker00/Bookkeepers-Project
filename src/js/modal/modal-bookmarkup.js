import { fetchBookById } from './modal-api';

const modalInformation = document.querySelector('.modal-information');
const conteinerImg = document.querySelector('.conteinerImg');
const amazonLinkRef = document.querySelector('.modal-amazon-link');
const appleBookLinkRef = document.querySelector('.modal-applebook-link');

export function generateBookMarkupImg(bookData) {
  const testMarkupImg = `
    <img class="modal-book-image" src="${bookData.book_image}" alt="${bookData.title}"/>
  `;
  conteinerImg.innerHTML = testMarkupImg;
}

export function generateBookMarkup(bookData) {
  const testMarkup = `
    <div class="modal-box">
    <h3 class="modal-book-title">${bookData.title}</h3>
    <p class="modal-author">Author: ${bookData.author}</p>
    <p class="modal-description">${bookData.description}</p>
    </div>
  `;
  modalInformation.innerHTML = testMarkup;
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

