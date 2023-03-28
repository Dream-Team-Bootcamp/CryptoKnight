import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBar.css";

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

  return (
    <nav className={isMobile ? "mobile-nav" : "nav"}>
      <h1>CryptoKnight</h1>
      <div>
        <NavLink to="/" exact={true} isActive={() => location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/about" isActive={() => location.pathname.startsWith("/about")}>
          About
        </NavLink>
        <NavLink to="/contact" isActive={() => location.pathname.startsWith("/contact")}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, isActive, children }) => {
  return (
    <Link className={isActive() ? "active" : ""} to={to}>
      {children}
    </Link>
  );
};

export default NavBar;