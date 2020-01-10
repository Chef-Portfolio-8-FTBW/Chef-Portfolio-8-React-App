import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router";
// import RecipeCard from "../components/RecipeCard";
import CPAuthButtons from "../components/CPAuthButtons";
import CPUnauthButtons from "../components/CPUnauthButtons";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

import location from '../components/icons/location.png';
import avi from '../components/icons/avi.png';

function ChefProfile(props) {
  const token = localStorage.getItem("token");
  // const Id = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();

  const [chef, setChef] = useState([]);
  const [chefRecipes, setChefRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://chef-2.herokuapp.com/api/user/user/${id}`)
      .then(res => {
        setChef(res.data);
      })
      .catch(err => console.log(err));
  }, [id, setChef]);

  useEffect(() => {
    axios
      .get(`https://chef-2.herokuapp.com/api/recipes/user/${id}`)
      .then(res => {
        setChefRecipes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id, setChefRecipes]);

  return (
    <>
      <Page>
        <div>
          {/* <img>{props.chefs.profileImg}</img> */}
          {chef.map(c => (

            <div key={c.id}>
              <div className="chefProfilePersonal">
                
                {
                  !c.user_picture ?
                    <img className="chefImage" src={avi} />
                  :
                    <img src={c.user_picture} className="chefImage" />
                }
                <h2 className="green chefProfileName">{c.full_name}</h2>
                <p className="chefProfileTitle">Master Chef</p>
                <p className="chefProfileLocation">
                  <img className="locationPin" src={location} />
                  {
                    !c.Location ?
                      <p className="location">Location</p>
                    :
                      <p className="location">{c.Location}</p>
                  }
                </p>
              </div>

              <div className="chefProfileBio">
                <h3 className="green about">About:</h3>
                <p className="about">{c.Bio}</p>

              </div>
            </div>
          ))}

          <div className="recipePageContainer">
            {chefRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                chefName={recipe.chef_name}
                title={recipe.recipe_name}
                photo={recipe.recipe_photo}
                cook_time={recipe.cook_time}
              />
            ))}
          </div>
        </div>
        <div>
          {token ? <CPAuthButtons props={props} /> : <CPUnauthButtons />}
        </div>
      </Page>
    </>
  );
}

export default ChefProfile;
