import React, { Component } from "react";
import { slide as SideNavMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import Logo from "../assets/images/logo.svg";
export default class SideNavBar extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <SideNavMenu left width={"280px"}>
        <div className="side-navbar-brand">
          <Link to="/" className="primary-color">
            <div id="logo"></div>
          </Link>
        </div>
        <div className="side-navbar-body">
          <Link class="sidebar-brand">
            <img src={Logo} alt="logo"></img>
          </Link>
          <Link to="/" className="sidenav-items">
            Home
          </Link>
          <Link to="/about" className="sidenav-items">
            Destination
          </Link>
          <Link to="/" className="sidenav-items">
            About
          </Link>
          <Link to="/" className="sidenav-items">
            Partner
          </Link>
          <Link to="/" className="sidenav-items btn login mt-4">
            Login
          </Link>
          <Link to="/" className="sidenav-items btn special-btn">
            Register
          </Link>
        </div>
      </SideNavMenu>
    );
  }
}
//SideNavBar.contextType = AuthContext;
