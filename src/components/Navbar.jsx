import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ConnectWeb3 from "./ConnectWeb3";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

const NavTitle = styled(motion.h1)`
  margin: 0;
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled(motion.ul)`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 66%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled(motion.li)`
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
`;

const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &.active {
    color: #50ae55;
  }
`;

const Hamburger = styled(motion.div)`
  width: 30px;
  height: 3px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
  }
  &:before {
    top: -10px;
  }
  &:after {
    top: 10px;
  }
`;

const ConnectWeb3Button = styled.button`
  display: flex-box;
  background-color: #50ae55;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #3c8f47;
  }
`;

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const navItemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -50 },
  hover: { scale: 1.1, color: "#50ae55" },
};

const navTitleVariants = {
  hover: { scale: 1.1 },
};

const hamburgerLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: (index) => ({
    rotate: index === 1 ? 45 : -45,
    y: [10, -10][index],
  }),
};

const HamburgerLine = styled(motion.div)`
  width: 100%;
  height: 3px;
  background-color: #fff;
  &:nth-child(1) {
    top: ${props => (props.isopen ? "0" : "-10px")};
  }
  &:nth-child(2) {
    top: 0;
  }
  &:nth-child(3) {
    top: ${props => (props.isopen ? "0" : "10px")};
  }
  position: absolute;
`;

const NavBar = () => {
  const [isopen, setisopen] = React.useState(false);

  const handleLinkClick = () => {
    setisopen(false);
  };

  const handleHamburgerClick = () => {
    setisopen(!isopen);
  };
  return (
    <Nav>
      <NavTitle
        initial={false}
        whileHover={navTitleVariants.hover}
      >
        Menu
      </NavTitle>
      <AnimatePresence>
        {isopen && (
          <NavLinks
            initial="closed"
            animate={isopen ? "open" : "closed"}
            exit="closed"
            variants={menuVariants}
          >
            <NavItem
              variants={navItemVariants}
              whileHover={navItemVariants.hover}
              whileTap={{ scale: 0.9 }}
            >
              <NavLinkStyle to="/" onClick={handleLinkClick} exact>
                Home
              </NavLinkStyle>
            </NavItem>
            <NavItem
              variants={navItemVariants}
              whileHover={navItemVariants.hover}
              whileTap={{ scale: 0.9 }}
            >
              <NavLinkStyle to="/about" onClick={handleLinkClick}>
                About
              </NavLinkStyle>
            </NavItem>
            <NavItem
              variants={navItemVariants}
              whileHover={navItemVariants.hover}
              whileTap={{ scale: 0.9 }}
            >
              <NavLinkStyle to="/contact" onClick={handleLinkClick}>
                Contact
              </NavLinkStyle>
            </NavItem>
            <NavItem
              variants={navItemVariants}
              whileHover={navItemVariants.hover}
              whileTap={{ scale: 0.9 }}
            >
              <ConnectWeb3Button>
                <ConnectWeb3 />
              </ConnectWeb3Button>
            </NavItem>
          </NavLinks>
        )}
      </AnimatePresence>
      <Hamburger
        onClick={handleHamburgerClick}
        initial={false}
        animate={isopen ? "open" : "closed"}
      >
        <HamburgerLine
  variants={hamburgerLineVariants}
  isopen={isopen ? "true" : "false"}
/>
<HamburgerLine
  variants={hamburgerLineVariants}
  isopen={isopen ? "true" : "false"}
/>
<HamburgerLine
  variants={hamburgerLineVariants}
  isopen={isopen ? "true" : "false"}
/>

      </Hamburger>
    </Nav>
  );
};

export default NavBar;

