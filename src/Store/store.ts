import { createStore } from "redux";
import { initialApp } from "./initialState";
import { app } from "./Reducers/AppReducers";

const store = createStore(app, initialApp);

export default store;