import React from "react";

import ItemList from "../book-list/book-list.js"

const HomePage = () => {
     return(
          <div>
               <h3>Books:</h3>
               <ItemList />
                    <h1 id="smth">
                         This is my cosy bookstore, welcome!
                    </h1>
          </div>
     );
};

export default HomePage;