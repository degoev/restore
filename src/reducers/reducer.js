
let initialState = {
     books: [],
     loading: true,
     error: null,
     cartItems: [],
     orderTotal: 0
};

let updateCartItems = (cartItems, bookId, bookItem, quantity) => {
        let cart = cartItems.slice();
        let itemIndex = findIndex(cart, bookId);
        
        
        if (itemIndex === -1) {
            return [...cart, bookItem];
        }
        return [...updateItemInCart(cart, itemIndex, quantity)];
        
        
};


let updateItemInCart = (cartItems, itemIndex, quantity) => {
        let cart = cartItems.slice();
        let item = JSON.parse(JSON.stringify(cart[itemIndex]));
        
        if (item.count + quantity === 0) {
            cart.splice(itemIndex, 1);
        
            return [...cart];
        }
        item.count += quantity;
        item.total += quantity*item.price;

        return [...cart.slice(0, itemIndex), item, ...cart.slice(itemIndex+1)];
};

let updateOrder = (state, bookId, quantity) => {
    let { cartItems: cart, books } = state;
    
    const bookItem = books.find((item) => item.id === bookId);
    
    let updatedCart = updateCartItems(cart, bookId, bookItem, quantity);
    
    let orderTotal = updatedCart.reduce((sum, item = 0) => sum += item.total, 0);
    
    return {
        ...state,
        cartItems: updatedCart,
        orderTotal: orderTotal
    };
};

let findIndex = (cart, bookId) => {
        return cart.findIndex(({ id }) => id === bookId);
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
              
               let bookId = action.payload;
               
               return updateOrder(state, bookId, 1);
               
          case "BOOK_COUNT_INCREASE":
                bookId = action.payload;
                
                return updateOrder(state, bookId, 1);
                
          case "BOOK_COUNT_DECREASE":
              
                bookId = action.payload;
                  
                return updateOrder(state, bookId, -1);
                  
          case "BOOK_DELETED_FROM_CART":
              
              bookId = action.payload;
              
              let item = state.cartItems.find(({id}) => id === bookId);
              
              return updateOrder(state, bookId, -item.count);
              
          default: 
          return state;
     }
};

export default reducer; 