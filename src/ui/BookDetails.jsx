import { useBookContext } from "@/contexts/BookContext";
import { addToReadLists, addToWishLists } from "@/store/bookSlice";

import React from "react";
import { RiEqualLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  // now the states are commng from redux store

  const dispatch = useDispatch();
  const { bookId } = useParams();

  const books = useSelector((state) => state.books.books);
  const readListBooks = useSelector((state) => state.books.readListBooks);

  const wishListBooks = useSelector((state) => state.books.wishListBooks);

  // Gaurd if books not loaded yet
  if(!books.length) return <p>Loading...</p>

  const singleBook = books.find((b) => b.bookId === Number(bookId));

  if (!singleBook) return <p>Book not Found</p>;

  // initial books marked logic

  const isBookMarked = readListBooks.some((book) => book.bookId == bookId);
  const isBookWishListed = wishListBooks.some((book) => book.bookId == bookId);

  const handleReadBooks = (singleBook) => {
    const isBookExist = readListBooks.find(
      (book) => book.bookId === singleBook.bookId,
    );

    const isBookExistInWishList = wishListBooks.find(
      (book) => book.bookId === singleBook.bookId,
    );
    if (isBookExist) {
      alert("Book is Already marked is Read");
      return;
    } else if (isBookExistInWishList) {
      alert("Book is Already in Wishlist");
      return;
    } else {
      dispatch(addToReadLists(singleBook));
      alert("book is added to read list");
    }
  };

  const handleWishlistBook = (singleBook) => {
    const isBookExistInReadList = readListBooks.find(
      (book) => book.bookId === singleBook.bookId,
    );
    const isBookExist = wishListBooks.find(
      (book) => book.bookId === singleBook.bookId,
    );
    if (isBookExist) {
      alert("Book is Already exist in Wishlist");
    } else if (isBookExistInReadList) {
      alert("Book is Already exist in Read List");
    } else {
      dispatch(addToWishLists(singleBook));
      alert("book is added to Wishlist");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 flex justify-center items-start">
      <div className="card lg:card-side bg-base-100 shadow-md max-w-4xl w-full">
        {/* Left: singleBook Image */}
        <figure className="bg-gray-200 p-4 lg:w-1/3 flex items-center justify-center">
          <img
            src={singleBook.image}
            alt={singleBook.bookName}
            className="h-64 object-contain"
          />
        </figure>

        {/* Right: singleBook Info */}
        <div className="card-body lg:w-2/3 p-4 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Name */}
            <h1 className="text-2xl font-bold">{singleBook.bookName}</h1>

            {/* Category */}
            <span className="badge badge-primary">{singleBook.category}</span>

            {/* Description */}
            <p className="text-left leading-5 text-xs  py-4 text-gray-500">
              {singleBook.review}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {singleBook.tags.map((tag) => (
                <span key={tag} className="badge badge-outline badge-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Details */}
            <ul className="flex flex-wrap gap-4 text-gray-600 text-sm">
              <li>
                <strong>Pages:</strong> {singleBook.totalPages}
              </li>
              <li>
                <strong>Publisher:</strong> {singleBook.publisher}
              </li>
              <li>
                <strong>Year:</strong> {singleBook.yearOfPublishing}
              </li>
              <li>
                <strong>Rating:</strong> ⭐ {singleBook.rating}
              </li>
            </ul>
          </div>

          {/* Footer buttons */}
          <div className="flex gap-3 mt-4  ">
            <button
              onClick={() => handleReadBooks(singleBook)}
              className="btn btn-success btn-sm disabled:bg-success/70 disabled:text-black/60"
            >
              {isBookMarked ? "Book Reded " : "Mark as Read"}
            </button>

            <button
              onClick={() => handleWishlistBook(singleBook)}
              className="btn  btn-primary btn-sm disabled:bg-primary/70 disabled:text-black/60"
            >
              {isBookWishListed ? "Added in Wishlist" : " Mark as Wishlist "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
