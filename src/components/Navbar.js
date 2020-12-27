import React, { useState } from "react";
import { MenuLink, Nav, Logo, Menu, Hamburger} from "../styles/NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="">
        AISHAH BUSHRA
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">PROJECTS</MenuLink>
        <MenuLink href="">ABOUT</MenuLink>
        <MenuLink href="">CV</MenuLink>
        <MenuLink href="">CONTACT</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
