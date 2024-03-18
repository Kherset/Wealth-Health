import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  birthdate: "",
  startdate: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  department: "",
};

export const authSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    createNewEmployee: (state, action) => {
      // const { field, value } = action.payload;
      // state.user[field] = value;
    },
  },
});

export const { createNewEmployee } = authSlice.actions;

// export const selectToken = (state) => state.auth.token;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
