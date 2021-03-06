import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import BooksIndexContainer from './books_index/books_index_container';
import BookDetailContainer from './books_show/book_detail_container';
import BookFormContainer from './books_form/book_form_container';
import BookEditContainer from './books_form/book_edit_container';
import BookshelvesIndexContainer from './bookshelves_index/bookshelves_index_container';
import BookshelfDetailContainer from './bookshelf_show/bookshelf_detail_container';


const App = () => (
  <div className="App">
    <Route path="/" component={NavBarContainer}/>
    <Route exact path="/" component={BooksIndexContainer}/>
    <Route exact path="/books/:bookId" component={BookDetailContainer} />
    <ProtectedRoute path="/book/new" component={BookFormContainer} />
    <ProtectedRoute exact path="/books/:bookId/edit" component={BookEditContainer} />
    <ProtectedRoute path="/bookshelves" component={BookshelvesIndexContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
