import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(value => !value)
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 bg-dark" light>
        <Container>
          <NavbarBrand className='text-white h1' tag={Link} to="/">GroceryStore</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/signup">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/login">Login</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink tag={Link} className="text-primary" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/fetch-data">Fetch data</NavLink>
              </NavItem> */}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}