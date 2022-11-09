import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import Stefan from "../assets/stefff.jpg";

function NavMenu() {
  const [showItems, setShowItems] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
    setShowItems(false);
  };

  return (
    <div className="nav-menu">
      <div
        className="mobile-menu-icon"
        onClick={() => setShowItems(!showItems)}
        onKeyDown={() => setShowItems(!showItems)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <section className="navbar-name">
        <img src={Stefan} alt="icon" />
        <p>stefan pantelic</p>
      </section>
      <ul className={showItems ? "navItems" : "navItems hideItem"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowItems(!showItems)}
          onKeyDown={() => setShowItems(!showItems)}
          tabIndex={0}
        >
          <MdClose />
        </div>

        <li onClick={scrollToTop}>
          <Link to="/">HOME</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li onClick={scrollToTop}>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
