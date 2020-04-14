import React from "react";

import BookList from "../../containers/book-list-container.js"

const HomePage = () => {
     return(
          <div>
               <h3>Books:</h3>
               <BookList />
                    <h1 id="smth">
                         This is my cosy bookstore, welcome!
                    </h1>
          </div>
     );
};

export default HomePage;