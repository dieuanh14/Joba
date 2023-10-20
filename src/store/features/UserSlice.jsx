import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const response = await axios.post(
        "https://exe-backend.azurewebsites.net/api/v1/User/Login",
        userCredentials
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      // localStorage.setItem("accessToken", response.data.accessToken);
      // console.log(
      //   "Access token stored successfully:",
      //   response.data.accessToken
      // );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

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
export const fetchUserList = createAsyncThunk(
  "user/fetchUserList",
  async (_, { getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    console.log("Fetching user list with accessToken:", accessToken);

    try {
      const response = await axios.get(
        "https://exe-backend.azurewebsites.net/api/v1/User/GetAllUser",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("API response:", response);

      if (!response || response.status !== 200) {
        throw new Error("Failed to fetch user list");
      }

      return response.data;
    } catch (error) {
      console.error("Fetch user list error:", error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    status: "idle",
    error: null,
    role: null,
    loading: false,
    user: {
      email: null,
    },
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
      .addCase(fetchUserList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList = action.payload;
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { loginSuccess, logoutSuccess, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
