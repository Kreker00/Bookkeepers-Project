import { fetchBookById } from './modal-api';

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', async function (event) {
    const closestLi = event.target.closest('li.book-card' || 'li.book-item');

    if (closestLi) {
      const bookId = closestLi.dataset.id;

      try {
        const bookData = await fetchBookById(bookId);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
