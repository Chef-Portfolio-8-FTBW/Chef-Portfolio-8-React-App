//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React, { useEffect, useState } from "react";
import Page from "../pages/Page";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import timer from "../components/icons/timer.png";
import avi from "../components/icons/avi.png";

function RecipePage(props) {
  const { id } = useParams();
  const user = Number(localStorage.getItem("user"));

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
      <Page className="recipePageContainer">
        <div className="recipePageTitleAndName">
          <h2 className="recipePageTitle green">{recipe.recipe_name}</h2>
          <p className="recipePageName">
            <img className="recipePageAvi" src={avi} alt="" />
            Chef {recipe.chef_name}
          </p>
        </div>

        <div className="recipePageImageContainer">
          <img
            className="recipePageImage"
            src={recipe.recipe_photo}
            alt=""
          ></img>
        </div>

        <div className="recipePageTimeContainer">
          <h4 className="green">Let's Cook!</h4>
          <p>
            <img className="timerIcon" src={timer} alt="" />
            {recipe.cook_time}
          </p>
        </div>
        <div className="recipePageServingContainer">
          <p>Servings: {recipe.servings}</p>
        </div>

        <div className="recipePageInI">
          <div className="ingredientsContainer">
            <h2 className="green">Ingredients</h2>
            {!recipe.recipe_ingredients ? (
              <p>No ingredients yet!</p>
            ) : (
              <p>{recipe.recipe_ingredients}</p>
            )}
          </div>
          <div className="instructionsContainer">
            <h2 className="green">Instructions</h2>
            {!recipe.instructions ? (
              <p>No instructions yet!</p>
            ) : (
              <p className="instructionContent">{recipe.instructions}</p>
            )}
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
              <button className="redButton" onClick={deleteRecipe}>
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
