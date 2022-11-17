import { configureStore } from "@reduxjs/toolkit";
import { Rootreducer } from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import Saga from "./Actions/saga";

const initialsState = {};
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: Rootreducer,
  initialsState,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(Saga);
const makstore = () => store;

export const wrapper = createWrapper(makstore, { debug: true });
