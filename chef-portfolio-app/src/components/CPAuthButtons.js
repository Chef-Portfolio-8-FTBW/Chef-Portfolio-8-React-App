import React from "react";

//onClick for Edit Profile component

function CPAuthButtons(props) {
  const routeToCreatePost = () => {
    props.props.history.push("/create-post");
  };

  return (
    <div>

      <button className="greenButton" onClick={routeToCreatePost}>
        Create Post
      </button>

    </div>
  );
}

export default CPAuthButtons;
