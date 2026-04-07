import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch the books form api

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await axios.get("/bookData.json");
  return res.data;
});

//  the simple function for geting the data initaly form localStorage
const loadFromLocalStorage = (name) => {
  try {
    return JSON.parse(localStorage.getItem(name)) ?? [];
  } catch {
    return [];
  }
};

// here is the book slice means the initial use state define in the context

const bookSlice = createSlice({
  name: "books",
  // initial state declartion like use state
  initialState: {
    readListBooks: loadFromLocalStorage("readListBooks"),
    wishListBooks: loadFromLocalStorage("wishListBooks"),
  },
  // createig te setState function in reducers like setting function
  reducers: {
    addToReadLists: (state, action) => {
      state.readListBooks.push(action.payload);
      localStorage.setItem(
        "readListBooks",
        JSON.stringify(state.readListBooks),
      );
    },
    addToWishLists: (state, action) => {
      state.wishListBooks.push(action.payload);

      localStorage.setItem(
        "wishListBooks",
        JSON.stringify(state.wishListBooks),
      );
    },
  },
  // Manage the Fetch Books api call with conventinal extra reducers

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

// export those set functin for useases
export const { addToReadLists, addToWishLists } = bookSlice.actions;

export default bookSlice.reducer;
