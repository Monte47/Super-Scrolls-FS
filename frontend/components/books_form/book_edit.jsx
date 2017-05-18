import React from 'react';
import { withRouter } from 'react-router-dom';

class EditBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: "",
      image_url: "",
      id: parseInt(this.props.match.params.bookId)
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestBook(this.state.id);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book) {
      this.setState({
          title: nextProps.book.title,
          author: nextProps.book.author,
          description: nextProps.book.description,
          image_url: nextProps.book.image_url
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBook(this.state).then(() => this.props.history.push(`/books/${this.state.id}`), (err => console.log(err.errors)));
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
          <h2>Edit:  {this.state.title}</h2>
          <form className="book-form" onSubmit={this.handleSubmit}>
            <ul className="errors-list">
              {this.errors()}
            </ul>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              />
            <input
              type="text"
              value={this.state.author}
              onChange={this.update("author")}
              />
            <h3>Synopsis:</h3>
            <textarea
              value={this.state.description}
              onChange={this.update("description")}>
            </textarea>
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.update("image_url")}
              />
            <button className="create-book-button">Update Book</button>
          </form>
        </div>
      </section>
    );
  }



}

export default withRouter(EditBookForm);
