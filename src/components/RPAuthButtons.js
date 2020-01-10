import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function RPAuthButtons(props) {
  const { id } = useParams();
  // console.log(id);
  console.log(props);
  return (
    <div>
      {/* <button>Delete Recipe</button>
      <button>Edit Recipe</button> */}
      {/* <Link to="/create-post">
        <button className="greenButton">Create Post</button>
      </Link> */}
      <Link to={`/chef-profile/${id}`}>
        <button className="greenButton">Chef Profile</button>
      </Link>
    </div>
  );
}

export default RPAuthButtons;
