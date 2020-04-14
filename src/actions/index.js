const booksLoaded = (newBooks) => {
     return {
          type: "FETCH_BOOKS_SUCCESS",
          payload: newBooks
     };
};

const booksRequested = () => {
     return {
          type: "FETCH_BOOKS_REQUESTED"
     }
}

const booksError = (err) => {
     return {
          type: "FETCH_BOOKS_FAILURE",
          payload: err
     }
}

const fetchBooks = (service, dispatch) => () => {
     dispatch(booksRequested());
     service.getBooks()
       .then((books) => {
          dispatch(booksLoaded(books));
       })
       .catch((err) => dispatch(booksError(err)) )
   };

const bookAddedToCart = (bookId) => {
     return {
          type: "BOOK_ADDED_TO_CART",
          payload: bookId
     }
}


export {
     fetchBooks, 
     bookAddedToCart
};
