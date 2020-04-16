import React from "react";

import BookListItem from "../book-list-item/book-list-item.js";



const BookList = ({ books, onAddedToCart }) => {
  return (
    <div className="book-list">
      <ul>{
        books.map((item) => {
          return (
              <li className="list-group-item" key={item.id}>
                      <BookListItem book={item} onAddedToCart={onAddedToCart} />
              </li>
          );
        })
      }</ul>
    </div>
  );
}


export default BookList;