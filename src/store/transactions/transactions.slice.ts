import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { IState } from "../../models/interfaces";
import { transactionsApi } from "./transactions.api";
import { DATA } from "../../utils/DATA";

const initialState: IState = {
  dataList: DATA,
  filteredList: DATA,
  statusFilter: "",
  typeFilter: "",
  chosenTransaction: null,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setStatus (state, action) {
      state.statusFilter = action.payload      
    },
    setType (state, action) {
      state.typeFilter = action.payload
    },
    setFilters(state) {
      if (state.statusFilter !== "" && state.typeFilter !== "") {        
        state.filteredList = state.dataList.filter(obj => obj.Status === state.statusFilter).filter(obj => obj.Type === state.typeFilter)
      } else if (state.statusFilter !== "" && state.typeFilter === "") {
        state.filteredList = state.dataList.filter(obj => obj.Status === state.statusFilter)
      } else if (state.statusFilter === "" && state.typeFilter !== "") {
        state.filteredList = state.dataList.filter(obj => obj.Type === state.typeFilter)
      } else state.filteredList = state.dataList
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      transactionsApi.endpoints.getData.matchFulfilled,
      (state, { payload }) => {
        state.dataList = payload;
        state.filteredList = payload;
      }
    );
  },
});

export const transactionsActions = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
