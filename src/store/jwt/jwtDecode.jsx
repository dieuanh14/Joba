// decodeJwtToken.js
import jwt from "jsonwebtoken";
import { setUser } from "../features/AuthSlice";

export const decodeJwtToken = () => (dispatch) => {
  const token = localStorage.getItem("accessToken"); // Replace 'accessToken' with your actual key

  try {
    const decodedToken = jwt.decode(token);
    const userRole =
      decodedToken[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];
    dispatch(setUser({ role: userRole, permissions: {} }));
  } catch (error) {
    console.error("JWT Decoding Error:", error);
  }
};
