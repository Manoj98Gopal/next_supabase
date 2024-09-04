"use client";

import React, { createContext, useReducer } from "react";

export const MyContext = createContext();

const bg = "https://res.cloudinary.com/kalibre-ai/image/upload/v1725259395/SocialMediaPosts/template1_lnayod.png"

const INITIAL_STATE = {
  postSize: {
    width: 1080,
    height: 1350,
  },
  zoom: "50%",
  templateStyle: {
    background: bg,
    title: {
      fontSize: "130px",
      fontColor: "#976ADE",
      fontWeight: 800,
      textShadow: "4.663px 1.999px 0px rgba(0, 0, 0, 0.90)",
      letterSpacing: "5.2px",
      lineHeight: "91%",
      marginTop: "160px",
      fontFamily: "Poppins",
    },
    subTitle: {
      marginTop: "80px",
      fontFamily: "Raleway",
      fontSize: "64px",
      fontWeight: 700,
      lineHeight: "104%",
      borderData: "2.5px solid #141414",
      borderRadius: "27px",
      background: "#FBDC6F",
      padding: "15px 40px",
      color: "#141414",
    },
    cardBorderColor: "#976ADE",
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
