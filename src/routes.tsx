import { createBrowserRouter } from "react-router";

import { HomeLayout } from "./layouts/MainLayout";
import { Favorites } from "./pages/app/favorites/Favorites";
import { Home } from "./pages/app/home/Home";
import { fetchMovies } from "./services/movies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: fetchMovies,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
    ],
  },
]);
