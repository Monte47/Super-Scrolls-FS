#Super Scrolls

[Superscrolls][heroku]
[heroku]: http://superscrolls.herokuapp.com

SuperScrolls is a single page web application inspired by [Goodreads][goodreads]. SuperScrolls allows users to browse, search, edit, review and create books, as well as manage bookshelves.

[goodreads]: https://www.goodreads.com/

The stack for SuperScrolls includes:

* PostgreSQL Database
* Ruby on Rails
* React / Redux

#Features and Implementation

### User Registration

Users can sign up for SuperScrolls, which implements a hand-rolled authentication relying on a hashed/salted password. Users can also use a demo account to view certain features which have been restricted to registered guests. User settings are saved via cookies and are kept logged in between sessions.

### Books

The front page of the app is the Books index, or the library. Users can scroll through the list of books to browse the selection. This page utilized an infinite scrolling feature, which checks if the user is near the bottom of the page, and fetches more books to render.

### Individual Books

By clicking on a book via the front page, a user will be redirected to that book's page. Here the user can view/edit the book's details or delete the book entirely. Reviews for that particular book are shown at the bottom of the page. If a user is logged in, they can add that book to one of their bookshelves or add a review of their own.

### Reviews



### Bookshelves
