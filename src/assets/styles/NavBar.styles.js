import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
position: relative;
`;

export const NavTitle = styled(motion.h1)`
margin: 0;
color: #fff;
cursor: pointer;
`;

export const NavLinks = styled(motion.ul)`
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

export const NavItem = styled(motion.li)`
margin: 1rem;
padding: 1rem;
font-size: 1.5rem;
`;

export const NavLinkStyle = styled(NavLink)`
text-decoration: none;
color: #fff;
font-weight: bold;
&.active {
  color: #50ae55;
}
`;

export const Hamburger = styled(motion.div)`
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

export const ConnectWeb3Button = styled.button`
  display: flex;
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



export const HamburgerLine = styled(motion.div)`
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

