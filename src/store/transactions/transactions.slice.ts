import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IState } from "../../models/interfaces";
import { transactionsApi } from "./transactions.api";
import { DATA } from "../../utils/DATA";

const initialState: IState = {
  dataList: null,
  filteredList: DATA,
};

const fetchData = createAsyncThunk("data", async (user) => {
  const res = await axios.post(`/mock/data`, user);
  console.log(res);
  
  return res.data;
});

fetchData()

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setFiltersByStatus(state, action) {
      // state.filteredList = action.payload;
    },
    setFiltersByType(state, action) {
      // state.filteredList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      transactionsApi.endpoints.getData.matchFulfilled,
      (state, { payload }) => {
        state.dataList = payload
        state.filteredList = payload
      }
    )
  }
});

export const transactionsActions = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
