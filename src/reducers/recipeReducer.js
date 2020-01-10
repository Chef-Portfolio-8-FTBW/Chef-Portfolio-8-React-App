import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_A_RECIPE_START,
  FETCH_A_RECIPE_SUCCESS,
  FETCH_A_RECIPE_FAILURE,
  FETCH_CHEF_RECIPES_START,
  FETCH_CHEF_RECIPES_SUCCESS,
  FETCH_CHEF_RECIPES_FAILURE,
  POST_NEW_RECIPE_START,
  POST_NEW_RECIPE_SUCCESS,
  POST_NEW_RECIPE_FAILURE,
  UPDATE_A_RECIPE_START,
  UPDATE_A_RECIPE_SUCCESS,
  UPDATE_A_RECIPE_FAILURE,
  DELETE_A_RECIPE_START,
  DELETE_A_RECIPE_SUCCESS,
  DELETE_A_RECIPE_FAILURE
} from "../actions/index";

const initialState = {
  recipes: [],
  postingRecipe: false,
  updatingRecipe: false,
  error: ""
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_START:
      return {
        ...state
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: ""
      };
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case FETCH_A_RECIPE_START:
      return {
        ...state
      };
    case FETCH_A_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: ""
      };
    case FETCH_A_RECIPE_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case FETCH_CHEF_RECIPES_START:
      return {
        ...state
      };
    case FETCH_CHEF_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: ""
      };
    case FETCH_CHEF_RECIPES_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case POST_NEW_RECIPE_START:
      return {
        ...state
      };
    case POST_NEW_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: ""
      };
    case POST_NEW_RECIPE_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case UPDATE_A_RECIPE_START:
      return {
        ...state
      };
    case UPDATE_A_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: ""
      };
    case UPDATE_A_RECIPE_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case DELETE_A_RECIPE_START:
      return {
        ...state
      };
    case DELETE_A_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        error: ""
      };
    case DELETE_A_RECIPE_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    default:
      return state;
  }
};

export default recipeReducer;
