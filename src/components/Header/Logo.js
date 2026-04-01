import { Link } from "react-router-dom";
import React, { Component } from "react";
import logo from "../../assets/img/brand-logo/burgeon-logo.png"; // adjust path if needed

class Logo extends Component {
  render() {
    return (
      <div className="logo-area">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    );
  }
}

export default Logo;