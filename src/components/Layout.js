"use client";

import React from "react";
import ToolBar from "./ToolBar";
import PostContent from "./PostContent";

function Layout() {
  return (
    <div className="h-[100dvh] w-[100vw] p-2">
      <div className="fixed top-0 left-0 right-0 z-10">
        <ToolBar />
      </div>
      <div className="w-full h-[94vh] overflow-y-auto flex justify-center items-center mt-[40px]">
        <PostContent />
      </div>
    </div>
  );
}

export default Layout;
