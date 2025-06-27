import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDestinations = createAsyncThunk(
  "destinations/fetchDestinations",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3000/destinations");
      if (!res.ok) throw new Error("Помилка завантаження локацій");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
