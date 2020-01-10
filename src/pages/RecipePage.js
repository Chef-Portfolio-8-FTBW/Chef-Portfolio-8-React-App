//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React, { useEffect, useState } from "react";
import Page from "../pages/Page";

import RPUnauthButtons from "../components/RPUnauthButtons";
import axios from "axios";
import { Link } from "react-router-dom";

import timer from '../components/icons/timer.png';

function RecipePage(props) {
  console.log(props);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://chef-2.herokuapp.com/api/recipes/recipeid/${props.match.params.id}`
      )
      .then(res => {
        console.log(res);
        setRecipe(res.data);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  const token = localStorage.getItem("token");

  return (
    <>
      <Page className="recipePageContainer">
        <div className="recipePageTitleAndName">
          <h2 className="recipePageTitle">{recipe.recipe_name}</h2>
          <p className="recipePageName">Chef {recipe.chef_name}</p>
        </div>

        <div className="recipePageImageContainer">
          <img className="recipePageImage" src={recipe.recipe_photo} alt=""></img>
        </div>

        <div className="recipePageTimeContainer">
          <h4 className="green">Let's Cook!</h4>
          <p>
            <img className="timerIcon" src={timer} /> 
            {recipe.cook_time} 
          </p>
        </div>
        <div className="recipePageServingContainer">
          <p>Servings: {recipe.servings}</p>
        </div>
        <div className="recipePageInI">
          <div className="ingredientsContainer">
            <h2 className="green">Ingredients</h2>
            {
              !recipe.recipe_ingredients ?
                <p>No ingredients yet!</p>
              : 
                <p>{recipe.recipe_ingredients}</p>
            }
          </div>
          <div className="instructionsContainer">
            <h2 className="green">Instructions</h2>
            {
              !recipe.instructions ?
                <p>No instructions yet!</p>
              : 
                <p>{recipe.instructions}</p>
            }
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
          {token ? (
            <Link to={`/chef-profile/${recipe.user_id}`}>
              <button className="greenButton">Chef Profile</button>
            </Link>
          ) : (
            <RPUnauthButtons />
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
