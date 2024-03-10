import { Categories } from "../types";
import type {Tag} from "@tryghost/content-api";

/**
 * Gets tailwind class depending on tag
 * @returns string
 * @param tag
 */
const getCategoryTheme = (tag: Tag['slug']) => {
  switch (tag) {
    case Categories.Blog:
      return "bg-lime-500";

    case Categories.Js:
      return "bg-tag-js";

    default:
      break;
  }
};

export default getCategoryTheme;
