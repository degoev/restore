import React, { Component } from "react";
import { connect } from "react-redux";

import withBsService from "../hoc/with-bs-service.js";
import compose from "../../utils/compose.js"

import { booksLoaded } from "../../actions/index.js";
import ListHeader from "./list-header/list-header.js"
import BookListItem from "../book-list-item/book-list-item.js";

class BookList extends Component {
  componentDidMount(){
    let { service } = this.props;
    let books = service.getBooks();
    this.props.booksLoaded(books)
  }

  render(){
    let { books } = this.props;
    return(
        <div className="book-list">
          <ListHeader />
          <ul>{
            books.map((item) => {
              return (
                  <li className="list-group-item" key={item.id}>
                          <BookListItem book={item} />
                  </li>
              );
            })
          }</ul>
        </div>
    );
  }
};

const mapStateToProps = ({ books }) => {
  return { books };
}


export default compose(
    withBsService, 
    connect(mapStateToProps, { booksLoaded })
  )(BookList);