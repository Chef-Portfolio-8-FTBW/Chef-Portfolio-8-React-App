import React, { useState, useEffect } from "react";
import Page from "../pages/Page";
import { useParams } from "react-router";
import { axiosWithAuth } from "../authentication/AxiosWithAuth";

const RecipeEditForm = props => {
  let { id } = useParams();

  const [editRecipe, setEditRecipe] = useState({
    recipe_name: "",
    recipe_photo: "",
    cook_time: "",
    recipe_ingredients: "",
    instructions: "",
    servings: "",
    prep_time: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/recipes/recipeid/${id}`)
      .then(res => {
        setEditRecipe(res.data);
      });
  }, [id]);

  const handleChange = e => {
    setEditRecipe({
      ...editRecipe,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/recipes/update/${id}`, editRecipe)
      .then(res => {
        props.history.push(`/recipe/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Page>
      <form onSubmit={handleSubmit} className="formContainer editFormContainer">
        <label>
          Recipe name:
          <input
            name="recipe_name"
            type="text"
            value={editRecipe.recipe_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Ingredients:
          <input
            name="recipe_ingredients"
            type="textarea"
            value={editRecipe.recipe_ingredients}
            onChange={handleChange}
          />
        </label>

        <label>
          Cook time:
          <input
            name="cook_time"
            type="text"
            value={editRecipe.cook_time}
            onChange={handleChange}
          />
        </label>

        <label>
          Prep time:
          <input
            name="prep_time"
            type="text"
            value={editRecipe.prep_time}
            onChange={handleChange}
          />
        </label>

        <label>
          Instructions:
          <input
            name="instructions"
            type="textarea"
            value={editRecipe.instructions}
            onChange={handleChange}
          />
        </label>

        <label>
          Servings:
          <input
            name="servings"
            type="text"
            value={editRecipe.servings}
            onChange={handleChange}
          />
        </label>

        <label>
          Add a photo:
          <input
            name="recipe_photo"
            type="text"
            value={editRecipe.recipe_photo}
            onChange={handleChange}
          />
        </label>
        <button className="submitButton">Save</button>
      </form>
    </Page>
  );
};

export default RecipeEditForm;
