import { fetchBookById } from './modal-api';
import { generateBookMarkup } from './modal-bookmarkup';
import { saveBookToStorage } from './modal-local-storage';

const buttonAddToBasket = document.querySelector('.add-btn');
const buttonRemoveToBasket = document.querySelector('.remove-btn');
const greetMessage = document.querySelector('.modal-message');
let currentBookData = []; // Зробили змінну глобальною

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', async function (event) {
    const closestLi = event.target.closest('li.book-item');

    if (closestLi) {
      const bookId = closestLi.dataset.id;

      try {
        currentBookData = await fetchBookById(bookId);
        generateBookMarkup(currentBookData);
        openModal();
        console.log(currentBookData);

        const storedBooks =
          JSON.parse(localStorage.getItem('storedBooks')) || [];
        const isBookInStorage = storedBooks.some(
          book => book._id === currentBookData._id
        );

        if (!isBookInStorage) {
          buttonAddToBasket.addEventListener('click', function () {
            addToLocalStorage(currentBookData);
          });
        } else {
          // Book is already in storage
          buttonAddToBasket.classList.add('visually-hidden');
          buttonRemoveToBasket.classList.remove('visually-hidden');
          greetMessage.classList.remove('visually-hidden');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });

  document.addEventListener('click', async function (event) {
    const closestLi = event.target.closest('li.book-card');

    if (closestLi) {
      const bookId = closestLi.dataset.id;

      try {
        currentBookData = await fetchBookById(bookId);
        generateBookMarkup(currentBookData);
        openModal();

        const storedBooks =
          JSON.parse(localStorage.getItem('storedBooks')) || [];
        const isBookInStorage = storedBooks.some(
          book => book._id === currentBookData._id
        );

        if (!isBookInStorage) {
          buttonAddToBasket.addEventListener('click', function () {
            addToLocalStorage(currentBookData);
          });
        } else {
          // Book is already in storage
          buttonAddToBasket.classList.add('visually-hidden');
          buttonRemoveToBasket.classList.remove('visually-hidden');
          greetMessage.classList.remove('visually-hidden');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });

  const closeIcon = document.querySelector('.modal-icon-x-close');
  closeIcon.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.modal-container')) {
      closeModal();
    }
  });

  // Перевірка при завантаженні сторінки
  updateButtonsVisibility();

  // Оновлення видимості кнопок при зміні локального сховища
  window.addEventListener('storage', function (event) {
    if (event.key === 'storedBooks') {
      updateButtonsVisibility();
    }
  });

  buttonRemoveToBasket.addEventListener('click', function () {
    const storedBooks = JSON.parse(localStorage.getItem('storedBooks')) || [];
    const indexToRemove = storedBooks.findIndex(
      book => book._id === currentBookData._id
    );

    if (indexToRemove !== -1) {
      storedBooks.splice(indexToRemove, 1);
      localStorage.setItem('storedBooks', JSON.stringify(storedBooks));

      // Оновлення видимості кнопок після видалення книги
      updateButtonsVisibility();
    }
  });
});

function openModal() {
  const modal = document.querySelector('.modal-section');
  modal?.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden'; // Забороняємо прокрутку фонового контенту
}

function closeModal() {
  const modal = document.querySelector('.modal-section');
  modal?.classList.add('visually-hidden');
  document.body.style.overflow = ''; // Відновлюємо можливість прокрутки фонового контенту
}

async function addToLocalStorage(bookData) {
  await saveBookToStorage(bookData);

  // Book is added to storage, update buttons
  updateButtonsVisibility();
}

function updateButtonsVisibility() {
  const storedBooks = JSON.parse(localStorage.getItem('storedBooks')) || [];
  const isBookInStorage = storedBooks.some(
    book => book._id === currentBookData._id
  );

  if (isBookInStorage) {
    buttonAddToBasket.classList.add('visually-hidden');
    buttonRemoveToBasket.classList.remove('visually-hidden');
    greetMessage.classList.remove('visually-hidden');
  } else {
    buttonAddToBasket.classList.remove('visually-hidden');
    buttonRemoveToBasket.classList.add('visually-hidden');
    greetMessage.classList.add('visually-hidden');
  }
}
