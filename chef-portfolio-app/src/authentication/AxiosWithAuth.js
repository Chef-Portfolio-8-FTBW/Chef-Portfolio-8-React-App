import axios from "axios";

//double-check with David if this is the correct endpoint for our data. Are we using the /api format?

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://chef-2.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};
