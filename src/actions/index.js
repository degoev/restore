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

const onIncrease = (bookId) => {
        return {
                type: "BOOK_COUNT_INCREASE",
                payload: bookId
        };
};

const onDecrease = (bookId) => {
    return {
        type: "BOOK_COUNT_DECREASE",
        payload: bookId
    };
};

const onDelete = (bookId) => {
    return {
        type: "BOOK_DELETED_FROM_CART",
        payload: bookId
    };
};


export {
     fetchBooks, 
     bookAddedToCart,
     onIncrease,
     onDecrease,
     onDelete
};
