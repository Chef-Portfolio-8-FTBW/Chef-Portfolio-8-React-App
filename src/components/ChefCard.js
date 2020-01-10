import React from "react";
import { Link } from "react-router-dom";
import avi from './icons/avi.png';
import location from './icons/location.png';

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
        <div>
          <h3 className="chefProfileName green">{props.name}</h3>
          <p className="chefProfileLocation">
            <img className="locationPin" src={location} />
            {
              !props.location ?
                <p className="location">Location</p>
              :
                <p className="location">{props.location}</p>
            }
          </p>
        </div>
        <p className="chefBio">{props.bio}</p>
        <p className="chefEmail">{props.email}</p>
      </div>
    </Link>
  );
}

export default ChefCard;
