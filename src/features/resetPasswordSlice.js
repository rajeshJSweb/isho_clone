import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthErrorCodes, getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const resetPassword = createAsyncThunk(
  "password/resetPassword",
  async ({ email }) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { message: "Please check your email for reset password link!" };
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        return { error: "The email or username you entered does not exist." };
      } else if (error.code === "auth/missing-email") {
        return { error: "Please enter your registered email" };
      } else {
        return { error: error.message };
      }
    }
  }
);

const resetPasswordSlice = createSlice({
  name: "password",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        (state.user = action.payload),
          (state.loading = false),
          (state.error = null);
      })
      .addCase(resetPassword.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload.message);
      });
  },
});

export default resetPasswordSlice.reducer;
