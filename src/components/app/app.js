import React, { Component } from "react";

import "./app.css"

import ErrorBoundry from "../error-boundry/error-boundry.js"
import { BsServiceProvider } from "../../services/bs-service-context.js"
import BookstoreService from "../../services/bookstore-service.js"

import ShopHeader from "../shop-header/shop-header.js";
import ItemList from "../item-list/item-list.js"

export default class App extends Component {
     constructor(){
          super();
          this.state = {
               order: [
                    {name: "Sonets", cost: 50},
                    {name: "Novels", cost: 100}
          ]
          }
     }
     bookstoreService = new BookstoreService();
     render(){
          let { order } = this.state;
          return(
               <ErrorBoundry>
                    <BsServiceProvider value={this.bookstoreService}>
                         
                         <ShopHeader order={order} />
                         <div>
                         <ItemList label="kek" />
                              <h1 id="smth">
                                   This is my cosy bookstore, welcome!
                              </h1>
                         </div>

                    </BsServiceProvider>
               </ErrorBoundry>
          );
     }
}