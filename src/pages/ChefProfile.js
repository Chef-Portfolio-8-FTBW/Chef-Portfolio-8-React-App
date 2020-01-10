import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router";
// import RecipeCard from "../components/RecipeCard";
import CPAuthButtons from "../components/CPAuthButtons";
import CPUnauthButtons from "../components/CPUnauthButtons";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

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
              <h2>{c.full_name}</h2>
              <p>Master Chef</p>
              <p>{c.Location}</p>
              <div>
                <h3>About:</h3>
                <p>{c.Bio}</p>
              </div>
            </div>
          ))}

          <div>
            {chefRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                chefName={recipe.chef_name}
                title={recipe.recipe_name}
                photo={recipe.recipe_photo}
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
