import { configureStore } from "@reduxjs/toolkit";
import CsvReducer from "./Reducers/CsvReducer";
import { Data } from "../../Types/Types";

const store = configureStore({
  reducer: {
    data: CsvReducer,
  },
});

export { store };
