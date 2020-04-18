import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withBsService from "../components/hoc/with-bs-service.js";
import compose from "../utils/compose.js"
import { fetchBooks, bookAddedToCart } from "../actions/index.js";

import Spinner from "../components/spinner/spinner.js";
import ErrorIndicator from "../components/error-indicator/error-indicator.js";
import BookList from "../components/book-list/book-list.js";

class BookListContainer extends Component {

  componentDidMount(){
    this.props.fetchBooks();
  }

  render(){
    let { books, loading, error, bookAddedToCart } = this.props;

    if(error){
      return <ErrorIndicator />
    }

    if(loading){
      return <Spinner />
    }
    return <BookList books={books} onAddedToCart={bookAddedToCart} />
  }
};

const mapStateToProps = ({ bookList: {books, loading, error} }) => {
     return { books, loading, error };
   };
   
const mapDispatchToProps = (dispatch, { service }) => {
     return bindActionCreators({
          fetchBooks: fetchBooks(service),
          bookAddedToCart: bookAddedToCart
     }, dispatch);
};

export default compose(
    withBsService, 
    connect(mapStateToProps, mapDispatchToProps)
  )(BookListContainer);