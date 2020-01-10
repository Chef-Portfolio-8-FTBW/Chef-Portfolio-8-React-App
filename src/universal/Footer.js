import React from "react";
import { Link } from "react-router-dom";

import facebook from '../components/icons/facebook.png';
import twitter from '../components/icons/twitter.png';
import instagram from '../components/icons/instagram.png';

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
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} />
        </a>

        <a href="https://www.twitter.com/" target="_blank">
          <img src={twitter} />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} />
        </a>
      </div>

      <div className="copyrightContainer">
        <p>2019 Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
