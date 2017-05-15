# SuperScrolls

[Heroku link][heroku]
[Trello link][trello]

[heroku]: http://herokuapp.com
[trello]: https://trello.com/b/1lmkyQl4/goodreads-fullstack-project

## Minimum Viable Product

SuperScrolls is a web application inspired by GoodReads built using Ruby on Rails and React/Redux. By the end of week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and demo login
- [ ] Books
- [ ] Bookshelves
- [ ] Reviews
- [ ] Read Status (will read, have read, etc.)
- [ ] Production README

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]

[wireframes]: https://github.com/Monte47/Super-Scrolls/tree/master/super_scrolls/docs/wireframes
[components]: https://github.com/Monte47/Super-Scrolls/blob/master/super_scrolls/docs/component-hierarchy.md
[api-endpoints]: https://github.com/Monte47/Super-Scrolls/blob/master/super_scrolls/docs/api-endpoints.md
[schema]: https://github.com/Monte47/Super-Scrolls/blob/master/super_scrolls/docs/schema.md
[sample-state]: https://github.com/Monte47/Super-Scrolls/blob/master/super_scrolls/docs/sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (W7D1-2)

**Objective:** Functioning Rails Project with Front-End Authentication

### Phase 2: Books Model, API, and components (W7D3-4)

**Objective** Books can be created, edited, viewed(index and show), and destroyed, through the API

### Phase 3: Bookshelves (W7D5-6)

**Objective** Bookshelves will belong to a User. Bookshelves can be created, edited, viewed, and destroyed through the API. Books can be added to, and taken off of Bookshelves. Default Bookshelves will be "Have Read", "Currently Reading", and "Want to Read"

### Phase 4: Reviews (W7D7)

**Objective** Reviews will belong to both a book and a user. Reviews can be created, edited, and destroyed through the API. Reviews will be displayed on the Book Show page.

### Phase 5: Search (W8D1-2)

**Objective** Users will be able to search for books. Search will be displayed in a NavBar.

### Phase 6: Styling (W8D3-5)

**Objective** Add CSS styling and additional images to App

### Bonus Features (TBD)

- [ ] Implement Infinite Scrolling on Book Index Page
- [ ] Implement Unique FrontPage with login/signup forms/buttons
- [ ] Add Tags to Books
- [ ] Add Comments/Likes to Reviews
