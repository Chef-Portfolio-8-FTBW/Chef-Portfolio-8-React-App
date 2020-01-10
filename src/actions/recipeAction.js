import axios from "axios";

// we need to fetch ALL recipes --outlined
// fetch one recipe --outlined
// we need to fetch recipes specific to a chef --outlined

// we need to post a new recipe to database --outlined
// update a recipe --outlined
// delete a recipe

//actions for all recipes
export const FETCH_RECIPES_START = "FETCH_RECIPES_START";
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";

//actions for fetching one recipe
export const FETCH_A_RECIPE_START = "FETCH_A_RECIPE_START";
export const FETCH_A_RECIPE_SUCCESS = "FETCH_A_RECIPE_SUCCESS";
export const FETCH_A_RECIPE_FAILURE = "FETCH_A_RECIPE_FAILURE";

//actions for fetching ONE chef's recipes
export const FETCH_CHEF_RECIPES_START = "FETCH_CHEF_RECIPES_START";
export const FETCH_CHEF_RECIPES_SUCCESS = "FETCH_CHEF_RECIPES_SUCCESS";
export const FETCH_CHEF_RECIPES_FAILURE = "FETCH_CHEF_RECIPES_FAILURE";

//action for posting a new recipe
//export const ADD_RECIPE = "ADD_RECIPE";

//actions for posting a new recipe
export const POST_NEW_RECIPE_START = "POST_NEW_RECIPE_START";
export const POST_NEW_RECIPE_SUCCESS = "POST_NEW_RECIPE_SUCCESS";
export const POST_NEW_RECIPE_FAILURE = "POST_NEW_RECIPE_FAILURE";

//actions for updating a new recipe
export const UPDATE_A_RECIPE_START = "UPDATE_A_RECIPE_START";
export const UPDATE_A_RECIPE_SUCCESS = "UPDATE_A_RECIPE_SUCCESS";
export const UPDATE_A_RECIPE_FAILURE = "UPDATE_A_RECIPE_FAILURE";

//actions for deleting a recipe
export const DELETE_A_RECIPE_START = "DELETE_A_RECIPE_START";
export const DELETE_A_RECIPE_SUCCESS = "DELETE_A_RECIPE_SUCCESS";
export const DELETE_A_RECIPE_FAILURE = "DELETE_A_RECIPE_FAILURE";

//specific for all recipes
export const getRecipes = () => dispatch => {
  dispatch({ type: FETCH_RECIPES_START });
  axios
    .get("https://chef-2.herokuapp.com/api/recipes")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_RECIPES_FAILURE, payload: err.res });
    });
};

//specific for just one recipe
export const getARecipe = id => dispatch => {
  dispatch({ type: FETCH_A_RECIPE_START });
  axios
    .get(`https://chef-2.herokuapp.com/api/recipes/recipeid/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_A_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_A_RECIPE_FAILURE, payload: err.res });
    });
};

//specific for one chef's set of recipes
export const getChefRecipes = userId => dispatch => {
  dispatch({ type: FETCH_CHEF_RECIPES_START });
  axios
    .get(`https://chef-2.herokuapp.com/api/recipes/user/${userId}`)
    .then(res => {
      console.log(res);
      //dispatch({type: FETCH_CHEF_RECIPES_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: FETCH_CHEF_RECIPES_FAILURE, payload: err.res });
    });
};

//specific for posting a new recipe
export const postNewRecipe = data => dispatch => {
  //need to include what data to post

  dispatch({ type: POST_NEW_RECIPE_START });
  axios
    .post("https://chef-2.herokuapp.com/api/recipes/post", data)
    .then(res => {
      console.log(res);
      dispatch({ type: POST_NEW_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_NEW_RECIPE_FAILURE, payload: err.res });
    });
};

//for updating a recipe
export const updateRecipe = (data, id) => dispatch => {
  //need to include what data to post

  dispatch({ type: UPDATE_A_RECIPE_START });
  axios
    .put(`https://chef-2.herokuapp.com/api/recipes/update/${id}`, data)
    .then(res => {
      console.log(res);
      // dispatch({ type: UPDATE_A_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_A_RECIPE_FAILURE, payload: err.res });
    });
};

//for deleting a recipe
export const deleteRecipe = id => dispatch => {
  //need to include what data to post

  dispatch({ type: DELETE_A_RECIPE_START });
  axios
    .delete(`https://chef-2.herokuapp.com/api/recipes/delete/${id}`)
    .then(res => {
      console.log(res);
      // dispatch({ type: DELETE_A_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_A_RECIPE_FAILURE, payload: err.res });
    });
};
