import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <div>
           
        {authenticated ? (
          <h2 onClick={this._handleLogoutClick}>Logout</h2>
        ) : (
          <h2 onClick={this._handleSignInClick}>Login</h2>
        )}
     
      </div>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:3002/auth/google", "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:3002/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}