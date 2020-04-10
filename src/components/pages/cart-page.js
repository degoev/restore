import React from "react";

import withBsService from "../hoc/with-bs-service.js";

const CartPage = ({service}) => {
     
     let books = service.getBooks().map((item) => {
          return (
               <li className="list-group-item" key={item.id}>
                    {item.title} ({item.price})
               </li>
          );
     });
     return(
          <div>
               <h3>
                    Your order:
               </h3>
               <ul className="list-group">
                    {books}
               </ul>
          </div>
     );
};

export default withBsService(CartPage);