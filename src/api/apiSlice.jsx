import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../features/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5174",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authozization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    const refrehResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refrehResult);
    if (refrehResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refrehResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints:builder=>({})
});
