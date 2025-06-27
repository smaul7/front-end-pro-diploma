import { createSlice } from "@reduxjs/toolkit";
import { fetchHotels, fetchHotelsByDestination } from "../thunks/hotelThunk";

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Помилка завантаження готелів";
      })

      .addCase(fetchHotelsByDestination.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelsByDestination.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchHotelsByDestination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Помилка завантаження готелів по локації";
      });
  },
});

export default hotelsSlice.reducer;

