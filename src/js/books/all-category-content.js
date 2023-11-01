import { getBestBook } from "../category/api-requests"
import { getMarkupBestBooks} from "./books-markup";
import { booksSelectors } from "./books-selectors";
import { categorySelectors } from "../category/category-selectors";
import Notiflix from 'notiflix';

// let darkTheme = true;

export async function makeAllCategoriesContent() {
    try {
           
        booksSelectors.allCategoryName.innerHTML = 'Best Sellers <span class ="category-name-bold">Books</span>'
        categorySelectors.allCategory.classList.add('category-active')
        const bestBooksData = await getBestBook()

        const bestBookMarkup = getMarkupBestBooks(bestBooksData)
         booksSelectors.booksContainer.insertAdjacentHTML("beforeend", bestBookMarkup)
    console.log(booksSelectors.allCategoryNameBold);
    
//     if (darkTheme) {
//         booksSelectors.allCategoryName.classList.add('all-category-name-dark-theme');
//             booksSelectors.allCategoryNameBold.classList.add('category-name-bold-dark-theme');
//         booksSelectors.bookName.classList.add('book-name-dark-theme');
// booksSelectors.btnGategoryBooks.classList.add('btn-book-open-category-dark-theme')
//         }
//         else if (!darkTheme) {
//         booksSelectors.allCategoryName.classList.remove('all-category-name-dark-theme');
//             booksSelectors.allCategoryNameBold.classList.remove('category-name-bold-dark-theme');
//         booksSelectors.bookName.classList.remove('book-name-dark-theme');
// booksSelectors.btnGategoryBooks.classList.remove('btn-book-open-category-dark-theme')
//         }
    }
 
    catch (error) {
        Notiflix.Notify.info('Sorry, no books found..');
    }
}