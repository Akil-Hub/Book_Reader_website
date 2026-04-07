import BookCard from "@/ui/BookCard";
import React from "react";
import { useSelector } from "react-redux";

const AllBooks = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-5xl font-semibold py-8">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center place-items-center">
        {books?.map((book) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
