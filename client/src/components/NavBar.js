import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


function NavBar() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" style={{backgroundColor: "#867B8E"}} light>
        <NavbarBrand href="/" className="mr-auto" style={{color: "#26252D", fontFamily: "monospace", fontSize: 30, textDecoration: "underline"}}>Zach R. Smelcer</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} style={{backgroundColor: "#BF716F"}}  className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
        </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
        </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;