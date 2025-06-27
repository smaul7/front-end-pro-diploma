import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/hotels");
      if (!res.ok) throw new Error("Помилка завантаження готелів");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchHotelsByDestination = createAsyncThunk(
  "hotels/fetchHotelsByDestination",
  async (destinationId, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3000/search?destinationId=${destinationId}`);
      if (!res.ok) throw new Error("Помилка завантаження готелів по локації");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
