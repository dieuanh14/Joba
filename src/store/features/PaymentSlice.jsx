import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPaymentUrl = createAsyncThunk(
  "payment/createPaymentUrl",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://backend-backup.azurewebsites.net/api/v1/VnPay/CreatePaymentUrl",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI1YjIzYzU5My00NjlhLTRjNjYtOTE0My0xYTk4ODk3MDU0ZjAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2OTc5NTQ4NDgsImlzcyI6IlRoaXNJc01vcmVUaGFuMTI4Yml0c1NlY3JldEtleSIsImF1ZCI6IlRoaXNJc01vcmVUaGFuMTI4Yml0c1NlY3JldEtleSJ9.qWWFvlxWnPNVNUi6KS56st8nYsF7r4CHyZT5-PaosTE",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      return await response.text();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentUrl: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentUrl.fulfilled, (state, action) => {
        state.paymentUrl = action.payload;
        console.log(action.payload);

        state.error = null;
      })
      .addCase(createPaymentUrl.rejected, (state, action) => {
        state.paymentUrl = null;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
