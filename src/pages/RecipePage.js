//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React, { useEffect, useState } from "react";
import Page from "../pages/Page";

import RPUnauthButtons from "../components/RPUnauthButtons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function RecipePage(props) {
  const { id } = useParams();
  const user = Number(localStorage.getItem("user"));
  console.log(typeof user);
  const token = localStorage.getItem("token");
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`https://chef-2.herokuapp.com/api/recipes/recipeid/${id}`)
      .then(res => {
        // console.log(res);
        setRecipe(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const deleteRecipe = () => {
    axios
      .delete(`https://chef-2.herokuapp.com/api/recipes/delete/${id}`)
      .then(res => {
        // console.log(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Page>
        <h2>{recipe.recipe_name}</h2>
        <div>
          <p>Chef {recipe.chef_name}</p>
        </div>
        <img src={recipe.recipe_photo} alt=""></img>
        <div>
          <h4>Let's Cook!</h4>
          <p>Approximately {recipe.cook_time} </p>
          <p>Servings: {recipe.servings}</p>
        </div>
        <div>
          <div>
            <h2>Ingredients</h2>
            <p>{recipe.recipe_ingredients}</p>
          </div>
          <div>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
          </div>
        </div>
        <div>
          <h4>Recipe Media</h4>
          <div>
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
          </div>
        </div>

        <div>
          <Link to={`/chef-profile/${recipe.user_id}`}>
            <button className="greenButton">Chef Profile</button>
          </Link>

          {token && user === recipe.user_id ? (
            <>
              <Link to={`/edit-recipe/${id}`}>
                <button className="greenButton">Edit Recipe</button>
              </Link>
              <button className="greenButton" onClick={deleteRecipe}>
                Delete Recipe
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </Page>
    </>
  );
}

export default RecipePage;
// key={recipe.id}
// chefName={recipe.chef_name}
// title={recipe.recipe_name}
// photo={recipe.photo}
// ingredients={recipe.recipe_ingredients}
// cookTime={recipe.cook_time}
// prepTime={recipe.prep_time}
// instructions={recipe.instructions}
// servings={recipe.servings}
