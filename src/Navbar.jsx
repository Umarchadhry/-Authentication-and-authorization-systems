import React from 'react';
import {Nav,NavLink,Bars,NavMenu,} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
          Contact
          </NavLink>
          <NavLink to='/signout' activeStyle>
          Signout
          </NavLink>

        </NavMenu>
      </Nav>
    </>
    
  );
  
};
  
export default Navbar;