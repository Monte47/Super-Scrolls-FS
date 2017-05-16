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
    this.props.login({username: "Monte", password:"password"});
  }


  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form-welcome">Welcome to SuperScrolls</div>
          <div className="login-form">
            <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
            />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
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
