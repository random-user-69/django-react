import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;

export const selectSearchValue = (state) => state.search.searchInput;
