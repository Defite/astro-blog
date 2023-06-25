import { Categories } from "../types";

/**
 * Gets tailwind class depending on category
 * @param category
 * @returns string
 */
const getCategoryTheme = (category: Categories) => {
  switch (category) {
    case Categories.Blog:
      return "bg-category-blog";

    case Categories.Js:
      return "bg-category-js";

    default:
      break;
  }
};

export default getCategoryTheme;
