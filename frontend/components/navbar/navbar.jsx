import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  handleDemo(e) {
    e.preventDefault();
    this.props.login({username: "Monte", password:"password"});
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }



  render() {
    return (
      <nav className='navbar'>
        <div className="LeftNav">
          <span className="NavTitle">SuperScrolls</span>
        </div>
        <div className="RightNav">
          <button onClick={this.handleDemo.bind(this)} type="button">Demo</button>
          <Link to="/login">
            <button type="button" className='Login Button'>Login</button>
          </Link>
          <Link to="/signup">
            <button type="button" className="Signup Button">Sign Up</button>
          </Link>
          <button onClick={this.handleLogout.bind(this)} type="button" className="Logout Button">Logout</button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
