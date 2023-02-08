import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../models/interfaces";

interface GithubState {
  openedArticle: IArticle | null;
}

const initialState: GithubState = {
  openedArticle: null,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    // setArticle(state, action: PayloadAction<IArticle>) {
    //   state.openedArticle = action.payload;
    // },
  },
});

export const transactionsActions = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
