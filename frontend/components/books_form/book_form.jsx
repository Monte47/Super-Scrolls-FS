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
        <ul>
          {this.errors()}
        </ul>
        <form className="book-form" onSubmit={this.handleSubmit}>
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
        </form>
        <button>Create Book</button>
      </section>
    );
  }


}

export default withRouter(BookForm);
