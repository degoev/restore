import React from "react";

import "./shop-header.css"

const ShopHeader = (props) => {
     let { order } = props;
     return(
          <nav>
               <h1>ReStore</h1>
               <div>
                    {order.length} items (${order.reduce((sum, item) => sum += item.cost, 0)})
               </div>
          </nav>
     );
};

export default ShopHeader;
