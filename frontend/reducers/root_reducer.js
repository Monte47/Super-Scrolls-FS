import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BooksReducer from './books_reducer';
import BookDetailReducer from './book_detail_reducer';
import ErrorsReducer from './errors_reducer';
import BookshelfReducer from './bookshelves_reducer';
import BookshelfDetailReducer from './bookshelf_detail_reducer';
// import ShelvingsReducer from './shelvings_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BooksReducer,
  bookDetail: BookDetailReducer,
  errors: ErrorsReducer,
  bookshelves: BookshelfReducer,
  bookshelfDetail: BookshelfDetailReducer,
  // shelvings: ShelvingsReducer
});

export default RootReducer;
