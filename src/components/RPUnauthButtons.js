import React from "react";
import { Link } from "react-router-dom";

function RPUnauthButtons() {
  return (
    <div>
      <Link to="/">
        <button className="greenButton">Return to Recipes</button>
      </Link>
      <Link to="/meet-the-chefs">
        <button className="greenButton">Return to Chefs</button>
      </Link>
    </div>
  );
}

export default RPUnauthButtons;
