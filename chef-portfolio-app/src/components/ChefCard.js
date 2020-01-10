import React from "react";
import { Link } from "react-router-dom";

//needs to push to chef profile

function ChefCard(props) {
  return (
    <Link to={`/chef-profile/${props.id}`}>
      <div className="chefCard">
        <img className="chefImage" src={props.img} alt="" />
        <h3 className="chefName">{props.name}</h3>
        <p className="chefLocation">{props.location}</p>
        <p className="chefBio">{props.bio}</p>
        <p className="chefEmail">{props.email}</p>
      </div>
    </Link>
  );
}

export default ChefCard;
