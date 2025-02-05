import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import BookDetailPage from "./pages/BookDetailPage";
import ErrorPage from "./pages/ErrorPage";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "books",
        element: <Books></Books>,
      },
      {
        path: "books/:name",
        element: <BookDetailPage></BookDetailPage>,
      },
    ],
  },
]);

export default router;
