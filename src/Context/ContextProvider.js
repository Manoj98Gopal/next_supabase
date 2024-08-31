"use client";

import React, { createContext, useReducer } from "react";

export const MyContext = createContext();

const INITIAL_STATE = {
  postSize: {
    width: 1080,
    height: 1350,
  },
  zoom: "50%",
  templateStyle: {
    background: "/bgImage.png",
    title: {
      fontSize: "130px",
      fontColor: "#976ADE",
      fontWeight: "extrabold",
      dropShadowValue: "4.663px_1.999px_0px_rgba(0,0,0,0.9)",
      letterSpacing: "5.2px",
      lineHeight: "91%",
      marginTop: "160px",
    },
  },
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
    case "templateStyle":
      return {
        ...state,
        templateStyle: action.payload,
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
