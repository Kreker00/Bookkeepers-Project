import { getBookCategory } from './api-requests';
import { categorySelectors } from './category-selectors';
import { categoryMarkup } from './category-markup';

(async () => {
  try {
    const categoryData = await getBookCategory();
    const markup = categoryMarkup(categoryData);
    categorySelectors.categoryList.insertAdjacentHTML('beforeend', markup);

    //     if (theme === isDark) {
    //          categorySelectors.categoryItem.classList.add('dark-category')
    //  categorySelectors.categoryContainer.classList.add(category-dark)
    //     categorySelectors.activeCategory.classList.add(active-dark-category)
    //     }
  } catch (error) {
    console.log(error);
  }
})();
