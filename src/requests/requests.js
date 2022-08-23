import axios from "axios";
const basePath = "http://127.0.0.1:8000";

export const registerUser = async (email, pwd) => {
  const url = `${basePath}/api/register/`;
  await axios.post(url, JSON.stringify({ email: email, password: pwd }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const loginUser = async (email, pwd) => {
  const url = `${basePath}/api/login/`;
  await axios.post(url, JSON.stringify({ email: email, password: pwd }), {
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Credentials": "*",
    },
    // withCredentials: true,
  });
};

export const getUserAccount = async () => {
  const url = `${basePath}/api/user/`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};
