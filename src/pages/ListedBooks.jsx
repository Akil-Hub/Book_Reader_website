import { useBookContext } from "@/contexts/BookContext";
import BookCard from "@/ui/BookCard";
import BookCardHorizontal from "@/ui/BookCardHorizontal";
import BookDetails from "@/ui/BookDetails";
// import BookDetails from "@/ui/BookDetails";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  const { readListBooks, wishListBooks,setReadListBooks,setWishListBooks } = useBookContext();
const [shortlistType, setShortlistType] = useState(null)


useEffect(() => {
if (shortlistType) {
  if (shortlistType === 'pages') {
    const sortedReadList = [ ...readListBooks].sort((a,b)=>a.totalPages - b.totalPages)
    setReadListBooks(sortedReadList)

    const sortedWishList = [ ...wishListBooks].sort((a,b)=>a.totalPages - b.totalPages)
    setWishListBooks(sortedWishList)
  }else if (shortlistType === 'rating'){
 const sortedReadList = [ ...readListBooks].sort((a,b)=>a.rating - b.rating)
    setReadListBooks(sortedReadList)

    const sortedWishList = [ ...wishListBooks].sort((a,b)=>a.rating - b.rating)
    setWishListBooks(sortedWishList)
  }
  
}

}, [shortlistType])

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* shorted fn */}
        <div className=" my-3 mx-auto ">
          <div className="dropdown dropdown-start justify-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Short by {shortlistType}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={()=>setShortlistType('pages')}>
                <a>Pages</a>
              </li>
              <li onClick={()=>setShortlistType('rating')}>
                <a>
                  Rating
                </a>
              </li>
            </ul>
          </div>
        </div>
      <Tabs className={'w-full'}>
        
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readListBooks.length < 1 ? (
            <p className="flex justify-center items-center h-60 text-5xl text-red-600">
              No Reded book is Found
            </p>
          ) : (
            readListBooks?.map((book) => (
              <BookCardHorizontal key={book.bookId} book={book} />
            ))
          )}
        </TabPanel>

        <TabPanel>
          {wishListBooks.length < 1 ? (
            <p className="flex justify-center items-center h-60 text-5xl text-red-600">
              No Wish-Listed book is Found
            </p>
          ) : (
            wishListBooks?.map((book) => (
              <BookCardHorizontal key={book.bookId} book={book} />
            ))
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
