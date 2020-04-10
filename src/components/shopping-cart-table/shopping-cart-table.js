import React from "react";

import withBsService from "../hoc/with-bs-service.js";

const ShoppingCartTable = ({service}) => {
     
     let books = service.getBooks().map((item) => {
          return (
               <tr key={item.id}>
                    <td>{item.id + 1}</td>
                    <td>{item.title}</td>
                    <td>1</td>
                    <td>${item.price}</td>
                    <td>
                         <button
                              className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                         </button>
                         <button
                              className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-plus-circle" />
                         </button>
                         <button
                              className="btn btn-outline-warning btn-sm float-right">
                    <i className="fa fa-minus-circle" />
                         </button>
                    </td>
               </tr>
          );
     });
     return(
          <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { books }
        </tbody>
      </table>

      <div className="total">
        Total: ${service.getBooks().reduce((sum, item) => sum += item.price, 0)}
      </div>
    </div>
     );
};

export default withBsService(ShoppingCartTable);