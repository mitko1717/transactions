import { createSlice, PayloadAction, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IState } from "../../models/interfaces";
import { transactionsApi } from "./transactions.api";

const initialState: IState = {
  data: null,
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
    // setArticle(state, action: PayloadAction<IArticle>) {
    //   state.openedArticle = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // console.log(action.payload);
      // state.data = action.payload;
    });
    builder.addMatcher(
      transactionsApi.endpoints.getData.matchFulfilled,
      (state, { payload }) => {
        state.data = payload
        console.log((state.data));
        
      }
    )
  }
});

export const transactionsActions = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
