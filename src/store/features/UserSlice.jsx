import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const response = await axios.post(
        "https://backend-backup.azurewebsites.net/api/v1/User/Login",
        userCredentials
      );
      localStorage.setItem("user", JSON.stringify(response.data));
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
        "https://backend-backup.azurewebsites.net/api/v1/User/Register",
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
  async () => {
    try {
      const response = await axios.get(
        "https://backend-backup.azurewebsites.net/api/v1/User/GetAllUser"
      );
      if (response.status !== 200) {
        throw new Error("Failed to fetch user list");
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://backend-backup.azurewebsites.net/api/v1/User/BanUser/${userId}`,
       
      );
      if (response.status === 204) {
        return userId;
      } else {
        return rejectWithValue("Failed to delete user");
      }
    } catch (error) {
      return rejectWithValue("Failed to delete user");
    }
  }
);
export const fetchPaymentStatus = createAsyncThunk(
  "user/fetchPaymentStatus",
  async (userId, { rejectWithValue }) => {
    console.log(userId)
    try {
      const response = await axios.get(
        `https://backend-backup.azurewebsites.net/api/v1/User/GetUserById?userId=${userId}`
      );
      console.log(response)

      if (response.status === 200) {
        return response.data; 
      } else {
        return rejectWithValue("Failed to fetch payment status");
      }
    } catch (error) {
      return rejectWithValue("Failed to fetch payment status");
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
    paymentStatus: null,
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
        state.error = null;
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList = action.payload;
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (Array.isArray(state.user)) {
          state.user = state.user.filter(
            (users) => users.id !== action.payload.id
          );
        }
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(fetchPaymentStatus.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPaymentStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentStatus = action.payload;
      })
      .addCase(fetchPaymentStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { loginSuccess, logoutSuccess, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
