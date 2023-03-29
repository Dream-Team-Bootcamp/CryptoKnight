import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavTitle = styled.h1`
  margin: 0;
  color: #fff;
`;

const NavLinks = styled(motion.ul)`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #00FF00;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }
`;

const NavItem = styled(motion.li)`
  margin: 0 1rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &.active {
    color: #00FF00;
  }
`;

const menuVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};


const navItemVariants = {
  closed: { opacity: 0, x: 100 },
  open: { opacity: 1, x: 0 },
  hover: { scale: 1.1 },
};

const NavBar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavTitle>CryptoKnight</NavTitle>
      {isMobile ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
          <NavLinks
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <NavItem
              variants={navItemVariants}
              whileHover="hover"
              onClick={() => setIsOpen(false)}
            >
              <NavLinkStyle to="/" exact={true} isActive={() => location.pathname === "/"}>
                Home
              </NavLinkStyle>
            </NavItem>
            <NavItem
              variants={navItemVariants}
              whileHover="hover"
              onClick={() => setIsOpen(false)}
            >
              <NavLinkStyle to="/about" isActive={() => location.pathname.startsWith("/about")}>
                Chart
              </NavLinkStyle>
            </NavItem>
            <NavItem
              variants={navItemVariants}
              whileHover="hover"
              onClick={() => setIsOpen(false)}
            >
              <NavLinkStyle to="/contact" isActive={() => location.pathname.startsWith("/contact")}>
                Contact
              </NavLinkStyle>
            </NavItem>
          </NavLinks>
        </>
      ) : (
        <div>
          <NavLinkStyle to="/" exact={true} isActive={() => location.pathname === "/"}>
            Home
          </NavLinkStyle>
          <NavLinkStyle to="/about" isActive={() => location.pathname.startsWith("/about")}>
            Chart
          </NavLinkStyle>
          <NavLinkStyle to="/contact" isActive={() => location.pathname.startsWith("/contact")}>
            Contact
          </NavLinkStyle>
        </div>
      )}
    </Nav>
  );
};

export default NavBar;
