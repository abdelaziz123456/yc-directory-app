"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";

const ReduxProvider = ({ childern }: { childern: React.ReactNode }) => {
  return <Provider store={store}>{childern}</Provider>;
};

export default ReduxProvider;
