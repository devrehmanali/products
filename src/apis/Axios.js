import Axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const configs = {
  "Access-Control-Allow-Origin": "*",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
};

const axios = Axios.create({
  baseURL: BASE_URL,
  ...configs,
});

export default axios;
