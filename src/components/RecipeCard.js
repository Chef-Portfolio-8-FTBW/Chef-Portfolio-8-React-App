//renders a title card with image for a recipe

// will need an onClick that directs users to the Recipe Page for that specific recipe

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipeCard(props) {
  // const routeToEditForm = () => {
  //   props.history.push(`/edit-recipe/${props.id}`);
  // };
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  console.log(user);
  console.log(props.user_id);

  // const buttonLogic = () =>

  const deleteRecipe = () => {
    axios
      .delete(`https://chef-2.herokuapp.com/api/recipes/delete/${props.id}`)
      .then(res => {
        let newRecipes = props.recipes.filter(recipe => {
          return recipe.id !== props.id;
        });
        props.setRecipes(newRecipes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const routeToRecipePage = () => {
  //   props.history.push(`/recipe/${props.match.params.id}`);
  // };

  return (
    <div>
      <Link to={`/recipe/${props.id}`}>
        <div>
          <img src={props.photo} alt="" />
          <h2>{props.title}</h2>
          <p>Chef: {props.chefName}</p>
          <p>Cook time: {props.cook_time}</p>
        </div>
      </Link>
      {token ? (
        <button className="greenButton" onClick={deleteRecipe}>
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
    </div>
  );
}

export default RecipeCard;

//onClick={routeToRecipePage}
