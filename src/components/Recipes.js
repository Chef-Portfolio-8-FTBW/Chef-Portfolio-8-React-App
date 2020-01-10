//map over array of recipes and render a RecipeCard component for each here.
// thinking here, we should make this reusable so that the Recipes can be displayed on a chef's profile (just his/her recipes) and on the Guest Homepage (all recipes in database)

import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

function Recipes() {
  const token = localStorage.getItem("token");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://chef-2.herokuapp.com/api/recipes").then(res => {
      setRecipes(res.data);
    });
  }, []);

  //Search state and input field state

  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState(recipes);

  //loading state

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setSearchResults(
        recipes.filter(recipe => {
          // return recipe.recipe_name.toLowerCase().includes(inputText.toLowerCase())
          if (
            recipe.recipe_name
              .toLowerCase()
              .includes(inputText.toLowerCase()) ||
            recipe.chef_name.toLowerCase().includes(inputText.toLowerCase())
          ) {
            return recipe;
          }
        })
      );
      setLoading(false);
    }, 300);
  }, [inputText, recipes]);

  const handleChange = e => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <>
      <div className="searchBar">
        <div className="searchFormDesc">
          <p>
            EXPLORE MORE! Search by Chef, Ingredient, Recipe, Type and More!
          </p>
        </div>

        <form className="searchForm">
          <label>
            <input
              type="text"
              value={inputText}
              onChange={handleChange}
              name="search"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

      {loading || !searchResults.length ? (
        <div>
          <Loader type="TailSpin" color="#07FE20" height={50} width={50} />
          <p>Nothing to display...</p>
        </div>
      ) : (
        searchResults.map(recipe => {
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              chefName={recipe.chef_name}
              title={recipe.recipe_name}
              photo={recipe.recipe_photo}
              cook_time={recipe.cook_time}
              user_id={recipe.user_id}
              setRecipes={setRecipes}
              recipes={recipes}
            />
          );
        })
      )}

      {token ? (
        <Link to={`/create-post`}>
          <button className="greenButton">Create Post</button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}

export default Recipes;
