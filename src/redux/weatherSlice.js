import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: [],
  },
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(city => city.id !== action.payload);
    },
  },
});

export const { addCity, removeCity } = weatherSlice.actions;
export default weatherSlice.reducer;