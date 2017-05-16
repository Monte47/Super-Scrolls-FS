```js
{
  currentUser: {
    id: 1,
    username: "username"
  },
  forms: {
    signUp: {errors: ["errors"]},
    logIn: {errors: ["errors"]},
    createBook: {errors: ["errors"]},
    createBookShelf: {errors: ["errors"]},
    createReview: {errors: ["errors"]}
  },
  books: {
    1: {
      title: "Sample State",
      author: "is useful to plan",
      imageUrl: "/a/location",
      description: "A description about a book"
    }
  },
  bookshelves: {
    1: {
      title: "Shelf Title",
      user_id: 1
    }
  },
  reviews: {
    1: {
      id: 1,
      bookId: 1,
      userId: 2,
      body: "A very thoughtful review"
    }
  }
}
```
