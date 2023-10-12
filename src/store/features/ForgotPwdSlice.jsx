// passwordResetSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const resetPassword = createAsyncThunk(
	'passwordReset/reset',
	async ({ code, newPassword, confirmPassword }) => {
	  const apiUrl = 'https://exe-backend.azurewebsites.net/api/v1/User/ResetPassword';
	  const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		  code,
		  newPassword,
		  confirmPassword,
		}),
	  });
	  if (!response.ok) {
		throw new Error('Failed to reset the password.');
	  }
	}
  );
  
  export const initiatePasswordReset = createAsyncThunk(
  'passwordReset/initiate',
  async (email) => {
    const apiUrl = `https://exe-backend.azurewebsites.net/api/v1/User/ForgotPassword?email=${email}`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to initiate password reset.');
    }
  }
);

// Create the password reset slice
const passwordResetSlice = createSlice({
  name: 'passwordReset',
  initialState: { status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initiatePasswordReset.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(initiatePasswordReset.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(initiatePasswordReset.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default passwordResetSlice.reducer;
