import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="logoContainer">
        <Link to="/">
          <h2 className="logo footerLogo">
            <span className="green">Chef</span>Port
            <span className="green">.</span>
          </h2>
        </Link>
      </div>

      <div className="footerNavItems">
        <Link to="/">Recipes</Link>
        <Link to="/">Meet The Chefs</Link>
        <Link to="/">Videos</Link>
        <Link to="/">FAQ</Link>
      </div>

      <div className="iconContainer">
        <p>F</p>
        <p>T</p>
        <p>I</p>
      </div>

      <div className="copyrightContainer">
        <p>2019 Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
