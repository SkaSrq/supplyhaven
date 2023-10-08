import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addUser = createAsyncThunk("user/add", async (user) => {
  return Promise.resolve(user);
});
export const addToken = createAsyncThunk("user/addToken", async (token) => {
  return Promise.resolve(token);
});
export const removeToken = createAsyncThunk(
  "user/removeToken",
  async (token) => {
    return Promise.resolve(token);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: undefined,
    token: undefined,
  },
  extraReducers: {
    [addUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [addToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
    [removeToken.fulfilled]: (state, action) => {
      state.token = undefined;
    },
  },
});

export default userSlice.reducer;
