import React from "react";
import { connect } from "react-redux";


import * as actions from "../../actions/index.js";
import Spinner from "../spinner/spinner.js";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete, loading }) => {

     if(loading){
          return <Spinner />
     }
    
     let booksTable = items.map((item, indx) => {
          return (
               <tr key={item.id}>
                    <td>{indx + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.count}</td>
                    <td>${item.total}</td>
                    <td>
                         <button
                              onClick={() => onDelete(item.id)}
                              className="btn btn-outline-danger btn-sm float-right">
                              <i className="fa fa-trash-o" />
                         </button>
                         <button
                              className="btn btn-outline-success btn-sm float-right"
                              onClick={() => onIncrease(item.id)}>
                              <i className="fa fa-plus-circle" />
                         </button>
                         <button
                              className="btn btn-outline-warning btn-sm float-right"
                              onClick={() => onDecrease(item.id)}>
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
               { booksTable }
               </tbody>
               </table>

               <div className="total">
               Total: ${total}
               </div>
          </div>
     );
};

const mapStateToProps = ({ cartItems, orderTotal, loading }) => {
     return { items: cartItems, total: orderTotal, loading };
   }

export default connect(mapStateToProps, actions)(ShoppingCartTable);