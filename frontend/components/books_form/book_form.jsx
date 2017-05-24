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
    this.uploadImg = this.uploadImg.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBook(this.state)
    .then(data => this.props.history.push(`/books/${data.id}/`));
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

  uploadImg(e) {
    e.preventDefault();
     window.cloudinary.openUploadWidget(
       window.CLOUDINARY_OPTIONS,
       function(error, images){
         if(!error) {
           this.setState({ image_url: images[0].url});
         }
       }.bind(this)
     );
  }

  render() {
    return (
      <section className="create-book">
        <div className="book-form-box">
          <h2>Create a New Book</h2>
          <form className="book-form">
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
            <button onClick={this.uploadImg}>Upload Cover Image</button>
            <button onClick={this.handleSubmit} className="create-book-button">Create Book</button>
          </form>
        </div>
      </section>
    );
  }


}

export default withRouter(BookForm);
