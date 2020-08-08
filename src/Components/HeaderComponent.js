import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Jumbotron,
  NavbarToggler,
  Input,
  Form,
} from "reactstrap";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.handelSearch = this.handelSearch.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  handelSearch() {
    this.props.fetchSearchedDishes(this.recipeName.value, 70);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand mr-auto>
              <img
                src="assests/logo.png"
                height="43"
                width="41"
                alt="Recepie Mania"
              />

              <span className="brand-name">Recipe Mania</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink to="/home" className="nav-link">
                    <span>HOME</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" className="nav-link">
                    <span>ABOUT</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" className="nav-link">
                    <span>Recipes</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-12">
                <h1>
                  Search for the dish you want to make.<br></br>From a catalog
                  of thousands of curated recipes.
                </h1>
              </div>
            </div>
            <div className="row row-header cries">
              <div className="search-items">
                <Form>
                  <Input
                    type="text"
                    placeholder="Search For Recipes"
                    innerRef={(input) => {
                      this.recipeName = input;
                    }}
                  ></Input>
                </Form>
                <Link to="/searchResult" className="nav-link">
                  <div
                    className="search-button"
                    onClick={() => {
                      this.handelSearch();
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
