import { categorySelectors } from "../category/category-selectors";
import { makeAllCategoriesContent } from "./all-category-content";




makeAllCategoriesContent()

categorySelectors.allCategory.addEventListener('click', makeAllCategoriesContent)