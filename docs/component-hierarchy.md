## Component Hierarchy

**AuthFormContainer**
- AuthForm

**SearchContainer**
- SearchResults
- SearchBar

**SearchResultsContainer**
- BookIndex

**BookIndexContainer**
- BookIndexItem
- NewBookForm
- BookshelfIndexContainer

**BookIndexItemContainer**

**BookDetailContainer**
- BookDetail
- BookshelfIndexContainer
- ReviewForm
- AddBookToShelfButton
- ReviewsIndexItem

**ReviewsIndexItemContainer**
- ReviewDetail

**NewBookContainer**
- NewBookForm

**EditBookContainer**
- EditBookForm

**BookshelfIndexContainer**
- BookshelfContainer

**BookshelfContainer**
- Bookshelves
- NewBookshelfForm


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/books" | "BookIndexContainer" |
| "/home/books/:bookId" | "BookDetailContainer" |
| "/home/bookshelves/:bookshelfId/" | "BookshelfContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-book" | "NewBookContainer" |
| "/new-notebook" | "NewNotebook" |
