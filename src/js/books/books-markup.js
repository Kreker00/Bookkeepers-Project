
export function getMarkupBestBooks(bookData) {
    const markup = bookData.map(item => {
        return `
        <div class="category-box">
            <h2 class="category-name">${item.list_name}</h2>
            <ul class="book-list">
                ${item.books.slice(0, 5).map(book => `
                    <li class="book-card" data-id="${book._id}">
                        <img class="photo-card" src="${book.book_image}" alt="${book.title}" />
                        <h3 class="book-name">${book.title}</h3>
                        <p class="book-author">${book.author}</p>
                    </li>`).join('')}
            </ul>
            <button class="btn-book-open-category">see more</button>
        </div>
        `;
    }).join('');

    return markup;
}