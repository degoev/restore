import {fetchBooks} from "../actions/index.js";

const mapStateToProps = ({ books, loading, error }) => {
     return { books, loading, error };
   };
   
const mapDispatchToProps = (dispatch, { service }) => {
     return {
          fetchBooks: fetchBooks(service, dispatch)
     }
};

export {
     mapDispatchToProps,
     mapStateToProps
};