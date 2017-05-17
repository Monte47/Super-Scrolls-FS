import React from 'react';
import { withRouter } from 'react-router-dom';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: "",
      image_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBook(this.state)
    .then(data => this.props.history.push(`/books/${data.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <section className="create-book">
        <div className="book-form-box">
          <h2>Create a New Book</h2>
          <form className="book-form" onSubmit={this.handleSubmit}>
            <ul className="errors-list">
              {this.errors()}
            </ul>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.update("title")}
              />
            <input
              type="text"
              value={this.state.author}
              placeholder="Author"
              onChange={this.update("author")}
              />
            <h3>Synopsis:</h3>
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="description">
            </textarea>
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.update("image_url")}
              placeholder="image_url"
              />
            <button className="create-book-button">Create Book</button>
          </form>
        </div>
      </section>
    );
  }


}

export default withRouter(BookForm);
