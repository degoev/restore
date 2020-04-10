import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundry from "./components/error-boundry/error-boundry.js";
import BookstoreService from "./services/bookstore-service.js";
import { BsServiceProvider } from "./services/bs-service-context.js";
import store from "./store.js";

import App from "./components/app/app.js";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BsServiceProvider value={bookstoreService}>
          <Router>
            <App/>
          </Router>
      </BsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('react-app')
);
