import axios from "axios";
const URL = "https://exe-backend.azurewebsites.net";

const instance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (credential) => {
  const response = await instance.post("/api/v1/User/Login", credential);
  console.log(response)
  console.log(credential)

  return response.data;
};
