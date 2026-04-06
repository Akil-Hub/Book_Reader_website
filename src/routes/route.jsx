import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import ListedBooks from "@/pages/ListedBooks";
import BookDetails from "@/ui/BookDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<MainLayout/>,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "listedBooks",
        element: <ListedBooks />,
      },
      {
        path: "book/:bookId",
        element: <BookDetails />,
      },
      {
        path: "listedBooks/book/:bookId",
        element: <BookDetails />,
      },
    ],
  },
]);
