import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPaymentUrl = createAsyncThunk(
  "payment/createPaymentUrl",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://exe-backend.azurewebsites.net/api/v1/VnPay/CreatePaymentUrl",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            Authorization:
              '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyZTUyZWMxNS1jNjljLTRmMzEtYmEyNy03YzdkNGRkNDRhMDciLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFuaHZ0ZHNlMTYxMTQ0QGZwdC5lZHUudm4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjk3NzA1NTU5LCJpc3MiOiJUaGlzSXNNb3JlVGhhbjEyOGJpdHNTZWNyZXRLZXkiLCJhdWQiOiJUaGlzSXNNb3JlVGhhbjEyOGJpdHNTZWNyZXRLZXkifQ.K9cz8mUtpCSlIilXbmkNpMloghUzdTF-wsJ4Z2A4XGU"',
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const data = await response.json();
	  console.log(data)
      return data;
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
        state.error = null;
      })
      .addCase(createPaymentUrl.rejected, (state, action) => {
        state.paymentUrl = null;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
