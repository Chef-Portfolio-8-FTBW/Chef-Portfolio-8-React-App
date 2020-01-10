import axios from "axios";

//will need to update with axiosWithAuth

//we want to fetch all chef profiles --outlined
//we want to create a new chef profile --outlined
// we want to update a chef profile --outlined
// we want to delete a chef profile --outlined

//actions for all chefs
export const FETCH_CHEFS_START = "FETCH_CHEFS_START";
export const FETCH_CHEFS_SUCCESS = "FETCH_CHEFS_SUCCESS";
export const FETCH_CHEFS_FAILURE = "FETCH_CHEFS_FAILURE";

export const FETCH_A_CHEF_START = "FETCH_A_CHEF_START";
export const FETCH_A_CHEF_SUCCESS = "FETCH_A_CHEF_SUCCESS";
export const FETCH_A_CHEF_FAILURE = "FETCH_A_CHEF_FAILURE";

//actions for posting a new chef profile
export const POST_NEW_CHEF_START = "POST_NEW_CHEF_START";
export const POST_NEW_CHEF_SUCCESS = "POST_NEW_CHEF_SUCCESS";
export const POST_NEW_CHEF_FAILURE = "POST_NEW_CHEF_FAILURE";

//actions for updating chef profile
// export const UPDATE_CHEF_PROFILE_START = "UPDATE_CHEF_PROFILE_START";
// export const UPDATE_CHEF_PROFILE_SUCCESS = "UPDATE_CHEF_PROFILE_SUCCESS";
// export const UPDATE_CHEF_PROFILE_FAILURE = "UPDATE_CHEF_PROFILE_FAILURE";

//actions for deleting chef profile
// export const DELETE_CHEF_PROFILE_START = "DELETE_CHEF_PROFILE_START";
// export const DELETE_CHEF_PROFILE_SUCCESS = "DELETE_CHEF_PROFILE_SUCCESS";
// export const DELETE_CHEF_PROFILE_FAILURE = "DELETE_CHEF_PROFILE_FAILURE";

//specific for all chefs

export const getChefs = () => dispatch => {
  dispatch({ type: FETCH_CHEFS_START });
  axios
    .get("https://chef-2.herokuapp.com/api/user/allusers")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_CHEFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHEFS_FAILURE, payload: err.res });
    });
};

export const getAChef = id => dispatch => {
  dispatch({ type: FETCH_A_CHEF_START });
  axios
    .get(`https://chef-2.herokuapp.com/api/user/user/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_A_CHEF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_A_CHEF_FAILURE, payload: err.res });
    });
};

//specific for posting a new chef profile
export const postNewChefProfile = data => dispatch => {
  //need to include what data to post

  dispatch({ type: POST_NEW_CHEF_START });
  axios //https://reqres.in/api/users/
    .post("https://chef-2.herokuapp.com/api/login/register", data)
    .then(res => {
      console.log(res);
      dispatch({ type: POST_NEW_CHEF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_NEW_CHEF_FAILURE, payload: err.res });
    });
};

// for updating chef profile
// export const updateChefProfile = (data, id) => dispatch => {
//   //need to include what data to post

//   dispatch({ type: UPDATE_CHEF_PROFILE_START });
//   axios
//     .put(`URL/${id}`, data)
//     .then(res => {
//       console.log(res);
//       // dispatch({ type: UPDATE_CHEF_PROFILE_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: UPDATE_CHEF_PROFILE_FAILURE, payload: err.res });
//     });
// };

//for deleting a chef profile
// export const deleteChefProfile = id => dispatch => {
//   //need to include what data to post

//   dispatch({ type: DELETE_CHEF_PROFILE_START });
//   axios
//     .delete(`URL/${id}`)
//     .then(res => {
//       console.log(res);
//       // dispatch({ type: DELETE_CHEF_PROFILE_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: DELETE_CHEF_PROFILE_FAILURE, payload: err.res });
//     });
// };
