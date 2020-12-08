import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


function NavBar() {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" style={{ backgroundColor: "#DCDCDC" }} light>
        <NavbarBrand   style={{color: "#393e46", fontFamily: "Ubunto", fontSize: 30, fontWeight: '50'}}>Zach R. Smelcer</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} style={{ backgroundColor: "whitesmoke" }} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem >
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >
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