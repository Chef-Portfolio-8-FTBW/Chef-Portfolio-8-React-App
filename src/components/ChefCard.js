import React from "react";
import { Link } from "react-router-dom";
import avi from './icons/avi.png';

//needs to push to chef profile

function ChefCard(props) {
  return (
    <Link to={`/chef-profile/${props.id}`}>
      <div className="chefCard">
        {
          !props.img ?
            <img className="chefCardAvi chefImage" src={avi} />
          :
            <img className="chefImage" src={props.img} alt="" />
        }
        <h3 className="chefName">{props.name}</h3>
        <p className="chefLocation">{props.location}</p>
        <p className="chefBio">{props.bio}</p>
        <p className="chefEmail">{props.email}</p>
      </div>
    </Link>
  );
}

export default ChefCard;
