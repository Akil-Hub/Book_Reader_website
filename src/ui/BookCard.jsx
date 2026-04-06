import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
    const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`book/${book.bookId}`)}
      className="card w-72 bg-base-100 shadow-lg"
    >
      <figure className="bg-gray-200 h-64 flex items-center justify-center overflow-hidden">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-full object-contain"
        />
      </figure>
      <div className="card-body p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {book.tags.map((tag) => (
            <span key={tag} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Name & Publisher */}
        <h2 className="card-title text-lg font-semibold">{book.bookName}</h2>
        <p className="text-sm text-gray-500">{book.publisher}</p>

        {/* Footer */}
        <div className="card-actions justify-between mt-4">
          <span className="badge badge-primary">{book.category}</span>
          <span className="text-yellow-500 font-semibold">
            ⭐ {book.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
