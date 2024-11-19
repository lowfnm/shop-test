import { ROUTES_ENUM } from "@/enums/routes";
import { title } from "process";

interface INavigationItem {
  icon?: string;
  title?: string;
  path: string;
}

export const NAVIGATION_ITEMS = [
  {
    title: "Products",
    path: ROUTES_ENUM.PRODUCTS,
  },
  {
    title: "Favorites",
    path: ROUTES_ENUM.FAVORITES,
  },
];
