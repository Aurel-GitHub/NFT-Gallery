import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: '',
  },
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export default categorySlice.reducer;
export const { setCategory } = categorySlice.actions;
