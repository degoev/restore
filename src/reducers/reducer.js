
let initialState = {
     books: [],
     loading: true,
     error: null,
     cartItems: [
          {
               id: 1,
               name: "Book 1",
               count: 2,
               total: 100
          },
          {
               id: 2,
               name: "Book 2",
               count: 1,
               total: 35
          },
     ],
     orderTotal: 135
};

const reducer = (state = initialState, action) => {
     switch(action.type){
          case "FETCH_BOOKS_REQUESTED":
               return { 
                    ...state,
                    books: [],
                    loading: true,
                    error: null
               };
          case "FETCH_BOOKS_SUCCESS":
               return { 
                    ...state,
                    books: action.payload,
                    loading: false,
                    error: null
               };
          case "FETCH_BOOKS_FAILURE":
               return { 
                    ...state,
                    books: [],
                    loading: false,
                    error: action.payload
               };
          case "BOOK_ADDED_TO_CART":
               const id = action.payload;
               const addedBook = state.books.find((item) => item.id === id)
               return { 
                    ...state,
                    books: action.payload,
                    loading: false,
                    error: null,
                    cartItems: state.cartItem.slice().push(addedBook)
               };
          default: 
          return state;
     }
};

export default reducer;
