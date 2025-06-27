import { createSlice } from "@reduxjs/toolkit";
import { fetchDestinations } from "../thunks/destinationsThunk";

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Помилка завантаження локацій";
      });
  },
});

export default destinationsSlice.reducer;
