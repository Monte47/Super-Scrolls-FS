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
    this.props.clearErrors();
  }

  componentWillMount() {
      this.props.requestBookshelves();
  }


  handleCreateBookshelf(e) {
    e.preventDefault();
    this.props.createBookshelf(this.state).then(() => this.setState({ name: ""}));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, i) => {
          return (<li className="error" key={i}>{error}</li>);
        })}
      </ul>
    );
  }

  render() {
    const { bookshelves, deleteBookshelf } = this.props;
    return (
      <div className="bookshelves-page">
        <section className="bookshelves-index">
          <h2>Bookshelves</h2>
          <ul className="bookshelves-list">
            {bookshelves.map(bookshelf => <BookshelvesIndexItem key={bookshelf.id} bookshelf={bookshelf} deleteBookshelf={deleteBookshelf} />)}
          </ul>
          <form className="bookshelf-form" onSubmit={this.handleCreateBookshelf}>
            {this.errors()}
            <input
              id="bookshelf-name-field"
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={this.update("name")}
              />
            <button id="create-bookshelf-button">New Bookshelf</button>
          </form>
        </section>
      </div>
    );
  }

}

export default withRouter(BookshelvesIndex);
