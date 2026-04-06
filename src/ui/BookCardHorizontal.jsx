import React from "react";
import { useNavigate } from "react-router-dom";

const BookCardHorizontal = ({ book }) => {
    const navigate = useNavigate()
  return (
    <div className="card card-side bg-base-100 shadow-sm p-3 gap-4 items-center">
      
      {/* Left: Image */}
      <figure className="bg-gray-200 p-3 rounded-lg">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-24 h-32 object-contain"
        />
      </figure>

      {/* Right: Content */}
      <div className="flex-1 space-y-2">
        
        {/* Title */}
        <h2 className="font-semibold text-lg">{book.bookName}</h2>

        {/* Publisher */}
        <p className="text-sm text-gray-500">{book.publisher}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span key={tag} className="badge badge-outline badge-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Category + Rating */}
        <div className="flex justify-between items-center text-sm mr-20">
       <div className="flex gap-4 items-center">
           <span className="badge badge-primary badge-sm ">
            {book.category}
           
          </span>
           <span className="badge badge-success badge-xl  text-xl">
            Pages : {book.totalPages}
           
          </span>


       </div>
          <span className="font-medium text-yellow-500 text-3xl">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Buttons */}
          <button onClick={()=>navigate(`/listedBooks/book/${book.bookId}`)} className="btn btn-success btn-xs">
            View Details
          </button>
        
     
      </div>
    </div>
  );
};

export default BookCardHorizontal;
