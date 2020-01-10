import React from "react";
import { Link } from "react-router-dom";

function RPUnauthButtons() {
  return (
    <div>
      <Link to="/">
        <button>Return to Recipes</button>
      </Link>
      <Link to="/meet-the-chefs">
        <button>Return to Chefs</button>
      </Link>
    </div>
  );
}

export default RPUnauthButtons;
