// // jwtDecode.js
// import jwt from "jsonwebtoken";
// require("dotenv").config(); // Load environment variables

// const secretKey = 'da';

// export const jwtDecode = (accessToken) => {
//   try {
//     const decoded = jwt.verify(accessToken, secretKey);
//     return decoded;
//   } catch (error) {
//     // Handle token verification errors
//     console.error("Token verification error:", error);
//     return null;
//   }
// };
