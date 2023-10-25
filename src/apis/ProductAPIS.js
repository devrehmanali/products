import axios from "./Axios";

export const getProductsListAPI = async (data) => {
  try {
    let token = localStorage.getItem("access_token");

    return await axios.get(`/products`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: false,
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const addAProductAPI = async (data) => {
  try {
    let token = localStorage.getItem("access_token");
    return await axios.post(`/products/add`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: false,
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};

export const updateAProductAPI = async (data) => {
  try {
    let token = localStorage.getItem("access_token");
    return await axios.put(`/products/${data?.id}`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: false,
    });
  } catch (err) {
    return { status: 400, message: err.response.statusText };
  }
};
