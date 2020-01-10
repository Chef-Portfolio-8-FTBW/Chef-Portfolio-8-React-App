import {
  FETCH_CHEFS_START,
  FETCH_CHEFS_SUCCESS,
  FETCH_CHEFS_FAILURE,
  POST_NEW_CHEF_START,
  POST_NEW_CHEF_SUCCESS,
  POST_NEW_CHEF_FAILURE,
  FETCH_A_CHEF_START,
  FETCH_A_CHEF_SUCCESS,
  FETCH_A_CHEF_FAILURE
  // UPDATE_CHEF_PROFILE_START,
  // UPDATE_CHEF_PROFILE_SUCCESS,
  // UPDATE_CHEF_PROFILE_FAILURE,
  // DELETE_CHEF_PROFILE_START,
  // DELETE_CHEF_PROFILE_SUCCESS,
  // DELETE_CHEF_PROFILE_FAILURE
} from "../actions/index";

const initialState = {
  chefs: [],
  postingChef: false,
  updatingChef: false,
  error: ""
};

const chefReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHEFS_START:
      return {
        ...state
      };
    case FETCH_CHEFS_SUCCESS:
      return {
        ...state,
        chefs: action.payload,
        error: ""
      };
    case FETCH_CHEFS_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case FETCH_A_CHEF_START:
      return {
        ...state
      };
    case FETCH_A_CHEF_SUCCESS:
      return {
        ...state,
        chefs: action.payload,
        error: ""
      };
    case FETCH_A_CHEF_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    case POST_NEW_CHEF_START:
      return {
        ...state
      };
    case POST_NEW_CHEF_SUCCESS:
      return {
        ...state,
        chefs: action.payload,
        error: ""
      };
    case POST_NEW_CHEF_FAILURE:
      return {
        ...state,
        error: action.error //action.payload??
      };
    // case UPDATE_CHEF_PROFILE_START:
    //   return {
    //     ...state
    //   };
    // case UPDATE_CHEF_PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     chefs: action.payload,
    //     error: ""
    //   };
    // case UPDATE_CHEF_PROFILE_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error //action.payload??
    //   };
    // case DELETE_CHEF_PROFILE_START:
    //   return {
    //     ...state
    //   };
    // case DELETE_CHEF_PROFILE_SUCCESS:
    //   return {
    //     ...state,
    //     chefs: action.payload,
    //     error: ""
    //   };
    // case DELETE_CHEF_PROFILE_FAILURE:
    //   return {
    //     ...state,
    //     error: action.error //action.payload??
    //   };
    default:
      return state;
  }
};

export default chefReducer;
