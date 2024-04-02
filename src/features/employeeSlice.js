import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    createNewEmployee: (state, action) => {
      const {
        firstname,
        lastname,
        birthdate,
        startdate,
        street,
        city,
        countryState,
        zipcode,
        department,
      } = action.payload;

      const newEmployee = {
        firstname,
        lastname,
        birthdate,
        startdate,
        street,
        city,
        countryState,
        zipcode,
        department,
      };

      state.employees.push(newEmployee);
    },
  },
});

export const { createNewEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
