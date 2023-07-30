import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
    this.auth = new Auth();
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    // You can implement your own user authentication logic here.
    // For demonstration purposes, we'll use a simple check for user authentication.
    const isAuthenticated = this.auth.isAuthenticated(); // Replace this with your own authentication check.
    this.setState({ isAuthenticated });
  }

  handleSignOut = () => {
    this.auth.signOut()
      .then(() => {
        this.setState({ isAuthenticated: false });
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  render() {
    const { isAuthenticated } = this.state;

    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          {/* Add more navigation links as needed */}
          {isAuthenticated ? (
            <li>
              <button onClick={this.handleSignOut}>Sign Out</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
