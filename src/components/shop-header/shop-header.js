import React from "react";
import { Link } from "react-router-dom";

import "./shop-header.css"

const ShopHeader = (props) => {
     let { order } = props;
     
     return(
          <header className="shop-header row">
               <Link to="/"><h1 className="logo text-dark">ReStore</h1></Link> 
               
               <Link to="/cart">
                    <div className='shopping-cart'>
                         <i className="cart-icon fa fa-shopping-cart" />
                         {order.length} items 
                         (${order.reduce((sum, item) => sum += item.price, 0)})
                    </div>
               </Link>
          </header>
     );
};

export default ShopHeader;
