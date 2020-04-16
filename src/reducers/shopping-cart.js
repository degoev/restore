const updateShoppingCart = (state, action) => {
     if (state === undefined) {
          return {
               cartItems: [],
               orderTotal: 0
          };
     }
     switch (action.type) {
          case "BOOK_ADDED_TO_CART":

               return updateOrder(state, action.payload, 1);

          case "BOOK_COUNT_INCREASE":

               return updateOrder(state, action.payload, 1);

          case "BOOK_COUNT_DECREASE":

               return updateOrder(state, action.payload, -1);

          case "BOOK_DELETED_FROM_CART":

               let item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);

               return updateOrder(state, action.payload, -item.count);

          default:
               return state.shoppingCart;
     }

}



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
     item.total += quantity * item.price;

     return [...cart.slice(0, itemIndex), item, ...cart.slice(itemIndex + 1)];
};

let updateOrder = (state, bookId, quantity) => {
     let { shoppingCart: { cartItems: cart }, bookList: { books } } = state;

     const bookItem = books.find((item) => item.id === bookId);

     let updatedCart = updateCartItems(cart, bookId, bookItem, quantity);

     let orderTotal = updatedCart.reduce((sum, item = 0) => sum += item.total, 0);

     return {
          cartItems: updatedCart,
          orderTotal: orderTotal
     };
};

let findIndex = (cart, bookId) => {
     return cart.findIndex(({ id }) => id === bookId);
};


export default updateShoppingCart;