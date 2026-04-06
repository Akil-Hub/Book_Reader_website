import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const [readListBooks, setReadListBooks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("readListBooks") ?? []);
    } catch {
      return [];
    }
  });

  const [wishListBooks, setWishListBooks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishListBooks") ?? []);
    } catch {
      return [];
    }
  });

  // fetching the data initially
  useEffect(() => {
    const getBooks = async (params) => {
      const res = await axios.get("/bookData.json");
      setBooks(res.data);
    };
    getBooks();
  }, []);

  //   Set the data into local storage

  useEffect(() => {
    localStorage.setItem("readListBooks", JSON.stringify(readListBooks));
  }, [readListBooks]);

  useEffect(() => {
    localStorage.setItem("wishListBooks", JSON.stringify(wishListBooks));
  }, [wishListBooks]);

  //   get single book id to see the bookDetail page
  const getSingleBook = (id) => {
    const singleBook = books.find((b) => b.bookId === Number(id));
    return singleBook;
  };

  //   data is setting in one object for easy passing
  const data = {
    books,
    setBooks,
    getSingleBook,

    readListBooks,
    setReadListBooks,
    wishListBooks,
    setWishListBooks,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export const useBookContext = () => useContext(BookContext);
