import React from "react";

import ListHeader from "./list-header/list-header.js"
import BookListItem from "../book-list-item/book-list-item.js";



const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <ListHeader />
      <ul>{
        books.map((item) => {
          return (
              <li className="list-group-item" key={item.id}>
                      <BookListItem book={item} />
              </li>
          );
        })
      }</ul>
    </div>
  );
}


export default BookList;