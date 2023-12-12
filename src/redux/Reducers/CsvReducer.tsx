import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Data } from "../../../Types/Types";

const initialState: Data = {} as Data;

const myCsvSlice = createSlice({
  name: "myCsv",
  initialState,
  reducers: {
    csvData: (state, action: PayloadAction<Data>) => {
      // Assuming 'History' is the type of data you want to update in the state

      state.history = action.payload.history;
      state.positions = action.payload.positions;
      state.orders = action.payload.orders;
      state.deals = action.payload.deals;
      state.results = action.payload.results;
    },
  },
});

export const { csvData } = myCsvSlice.actions;

export default myCsvSlice.reducer;
