import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css"

import withBsService from "../hoc/with-bs-service.js";

import ShopHeader from "../shop-header/shop-header.js";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table.js";
import HomePage from "../pages/home-page.js";


const App = ({service}) =>  {
     //let { bookStoreService } = this.props
     return(
          <div className="app">
               <ShopHeader order={service.getBooks()} />
                    <Switch>
                         <Route path="/" component={HomePage} exact />
                         <Route path="/cart" component={ShoppingCartTable} exact/>
                         <Route render={() => <h2>Page not found</h2> }/>
                    </Switch>
               
          </div>
     );
};


export default withBsService(App);