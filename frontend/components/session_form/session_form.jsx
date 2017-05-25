import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Need an account? Sign Up</Link>;
    } else {
      return <Link to="/login">Already a User? Log In</Link>;
    }
  }

  handleDemo(e) {
    e.preventDefault();
    let name = "Monte";
    let password = "password";
    
    for (let i = 0; i < name.length; i++) {
      setTimeout(() => this.setState({username: name.slice(0, i + 1)}), (i * 100));
    }

    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({password: password.slice(0, j + 1)}), ((j + 5) * 100));
    }

    setTimeout(() => this.props.processForm(this.state), 1400);
  }

  errors() {
    if(this.props.errors.length > 0) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }


  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2 className="login-form-welcome">Welcome to SuperScrolls</h2>
          <h3 className="website-description">A website to track your books</h3>
          <div className="login-form">
            <ul className="errors-list">
              {this.errors()}
            </ul>
            <br/>
            <label>
              <input type="text" required
                value={this.state.username}
                onChange={this.update('username')}
                />
              <div className="label-text">Username</div>
            </label>
            <label>
              <input type="password" required
                value={this.state.password}
                onChange={this.update('password')}
                />
              <div className="label-text">Password</div>
            </label>
            <br/>
            <br/>
            <input id="login-submit" type="submit" value="Submit" />
            <br></br>
            {this.navLink()}
            <br></br>
            <button className="demo-button" onClick={this.handleDemo.bind(this)} type="button">Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
