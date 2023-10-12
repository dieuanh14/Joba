import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/loginUser", async (userCredentials) => {
  try {
    const response = await axios.post(
      "https://exe-backend.azurewebsites.net/api/v1/User/Login",
      userCredentials
    );
    console.log("API Response:", response.data); // Add this line to inspect the response structure
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://exe-backend.azurewebsites.net/api/v1/User/Register",
        userData
      );
      console.log(userData);
      const responseData = response.data.data;
      localStorage.setItem("user", JSON.stringify(responseData));
      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: null,
    loading: false,
    user: {
      email: null,
    },
    error: null,
    isLoggedIn: false,
    registrationLoading: false,
    registrationError: null,
  },
  reducers: {

    loginSuccess: (state) => {
      state.isLoggedIn = true;
      console.log(state.isLoggedIn);
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message === "Request failed with status 401") {
          state.error = "access denied! Invalid user";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.registrationLoading = true;
        state.registrationError = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registrationLoading = false;
        console.log(action.payload);
        // state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationLoading = false;
        state.registrationError = action.error.message;
      })
      // .addCase(loginWithGoogle.pending, (state) => {
      //   state.loading = true;
      //   state.user = null;
      //   state.error = null;
      // })
      // .addCase(loginWithGoogle.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload;
      //   console.log(action.payload);
      //   state.error = null;
      //   state.isLoggedIn = true;
      // })
      // .addCase(loginWithGoogle.rejected, (state, action) => {
      //   state.loading = false;
      //   state.user = null;
      //   if (action.error.message === "Request failed with status 401") {
      //     state.error = "access denied! Invalid user";
      //   } else {
      //     state.error = action.error.message;
      //   }
      // });
  },
});
export const { loginSuccess, logoutSuccess, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
