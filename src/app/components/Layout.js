"use client";

import React, { useState } from "react";
import MainContent from "./MainContent";
import ToolBar from "./ToolBar";

function Layout() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(700);

  return (
    <div className="h-[100dvh] w-[100vw] p-2">
      <div className="h-full w-full">
        <ToolBar
          width={width}
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
        />
        <MainContent width={width} height={height} />
      </div>
    </div>
  );
}

export default Layout;
