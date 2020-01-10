//renders a title card with image for a recipe

// will need an onClick that directs users to the Recipe Page for that specific recipe

import React from "react";
import { Link } from "react-router-dom";

import timer from "./icons/timer.png";

function RecipeCard(props) {
  // const routeToEditForm = () => {
  //   props.history.push(`/edit-recipe/${props.id}`);
  // };
  // const token = localStorage.getItem("token");
  // const user = localStorage.getItem("user");
  // console.log(user);
  // console.log(props.user_id);

  // const buttonLogic = () =>

  // const deleteRecipe = () => {
  //   axios
  //     .delete(`https://chef-2.herokuapp.com/api/recipes/delete/${props.id}`)
  //     .then(res => {
  //       let newRecipes = props.recipes.filter(recipe => {
  //         return recipe.id !== props.id;
  //       });
  //       props.setRecipes(newRecipes);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const routeToRecipePage = () => {
  //   props.history.push(`/recipe/${props.match.params.id}`);
  // };

  return (
    <div className="recipeCard">
      <Link to={`/recipe/${props.id}`}>
        <div>
          <div className="recipeCardImgAndTitle">
            <h2 className="recipeCardTitle">{props.title}</h2>
            <img className="recipeCardImage" src={props.photo} alt="" />
          </div>
          <div className="recipeCardContent">
            <p className="recipeCardChef">Chef: {props.chefName}</p>
            <p className="recipeCardTime">
              <img className="timerIcon" src={timer} alt="" />
              {props.cook_time}
            </p>
          </div>
        </div>
      </Link>

      {/* <div className="recipeCardButtonContainer">
        {token ? (
          <button className="redButton" onClick={deleteRecipe}>
            Delete Recipe
          </button>
        ) : (
          ""
        )}
        {token ? (
          <Link to={`/edit-recipe/${props.id}`}>
            <button className="greenButton">Edit Recipe</button>
          </Link>
        ) : (
          ""
        )}
      </div> */}

      {/* {token ? (
        <button className="greenButton" onClick={deleteRecipe}>
          Delete Recipe
        </button>
      ) : (
        ""
      )} */}
      {/* {token ? (
        <Link to={`/edit-recipe/${props.id}`}>
          <button className="greenButton">Edit Recipe</button>
        </Link>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default RecipeCard;

//onClick={routeToRecipePage}
