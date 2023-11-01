import { fetchBookById } from './modal-api';
import { saveBookToStorage, getStoredBooks } from './modal-local-storage';

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', async function (event) {
    if (event.target.classList.contains('book-card')) {
      const bookId = event.target.dataset.bookId;

      try {
        const bookData = await fetchBookById(bookId);
        await saveBookToStorage(bookId, bookData);

        const buyLinks = bookData.buy_links;
        const amazonLink = buyLinks.find(link => link.name === 'Amazon');
        const appleBooksLink = buyLinks.find(
          link => link.name === 'Apple Books'
        );

        const storedBooks = await getStoredBooks();
        console.log('Stored Books:', storedBooks);

        // Ваш код для використання отриманих даних
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
});
