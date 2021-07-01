import React from "react";
import { Nav, NavbarContainer, NavLogo, MobileIcons, NavMenu, NavItem, NavLinks } from "./NavbarElements";
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>SANIDHYA PANERI</NavLogo>
          <MobileIcons>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='work'>Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='resume'>Resume</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
