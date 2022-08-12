import axios from "axios";
const basePath = "http://127.0.0.1:8000";

export const register = async (email, pwd) => {
  const url = `${basePath}/api/register/`;
  await axios.post(url, JSON.stringify({ email: email, password: pwd }), {
    headers: { "Content-Type": "application/json" },
  });
};
