import React from "react";

import "./book-list-item.css";

let BookListItem = ({ book, onAddedToCart }) => {
     let { title, author, price, coverImage, id } = book;
     return (
          <div className="book-list-item">
               <div className="book-cover">
                    <img src={coverImage} alt="coverImage" />
               </div>
               <div className="book-details">
                    <span className="book-title">{title}</span>
                    <div className="book-author">{author}</div>
                    <div className="book-price">${price}</div>
                    <button
                         onClick={() => onAddedToCart(id)}
                         className="btn btn-info add-to-cart">
                         Add to cart
                    </button>
               </div>
          </div>
     );
};

export default BookListItem;