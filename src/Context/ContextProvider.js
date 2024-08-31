"use client";

import React, { createContext, useReducer } from "react";

export const MyContext = createContext();

const INITIAL_STATE = {
  postSize: {
    width: 1080,
    height: 1350,
  },
  zoom: "50%",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "postSize":
      return {
        ...state,
        postSize: action.payload,
      };
    case "zoom":
      return {
        ...state,
        zoom: action.payload,
      };
    default:
      return state;
  }
};

function ContextProvider({ children }) {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    INITIAL_STATE
  );

  return (
    <div>
      <MyContext.Provider
        value={{
          globalState,
          globalDispatch,
        }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default ContextProvider;
