import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import BookshelvesIndexItem from './bookshelves_index_item';

class BookshelvesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleCreateBookshelf = this.handleCreateBookshelf.bind(this);
  }


  componentDidMount() {
    this.props.requestBookshelves();
  }

  componentWillMount() {
      this.props.requestBookshelves();
  }

  handleCreateBookshelf(e) {
    e.preventDefault();
    this.props.createBookshelf(this.state);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const { bookshelves } = this.props;
    return (
      <section className="bookshelves-index">
        <h1>Bookshelves Placeholder</h1>
        <ul>
          {bookshelves.map(bookshelf => <BookshelvesIndexItem key={bookshelf.id} bookshelf={bookshelf} />)}
        </ul>
        <form className="bookshelf-form" onSubmit={this.handleCreateBookshelf}>
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.update("name")}
            />
          <button id="create-bookshelf-button">New Bookshelf</button>
        </form>
      </section>
    );
  }

}

export default withRouter(BookshelvesIndex);
