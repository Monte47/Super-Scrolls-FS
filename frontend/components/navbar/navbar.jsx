import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {


  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }



  render() {
    if(this.props.currentUser) {
      return (
        <nav className='navbar'>
          <div className="LeftNav">
            <Link to="/">
              <span id="nav-title">SuperScrolls</span>
            </Link>
            <Link to="/bookshelves">
              <span id="my-books-nav-link">My Books</span>
            </Link>
          </div>
          <div className="RightNav">
            <button onClick={this.handleLogout.bind(this)} type="button" className="Logout Button">Logout</button>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className='navbar'>
          <div className="LeftNav">
            <Link to="/">
              <span id="nav-title">SuperScrolls</span>
            </Link>
          </div>
          <div className="RightNav">
            <Link to="/login">
              <button type="button" className='Login Button'>Login</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="Signup Button">Sign Up</button>
            </Link>
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);
