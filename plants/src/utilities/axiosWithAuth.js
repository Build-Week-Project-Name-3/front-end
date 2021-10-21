import axios from "axios";

const axiosWithAuth = () => {
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("userId");

  return axios.create({
    //this code makes it so all calls that use axiosWithAuth in the future don't need to include 'https://build-week-water-my-plants-1.herokuapp.com/api'
    baseURL: "https://build-week-water-my-plants-1.herokuapp.com/api",
    headers: {
      authorization: token,
      user_id: user_id,
    },
  });
};

export default axiosWithAuth;
