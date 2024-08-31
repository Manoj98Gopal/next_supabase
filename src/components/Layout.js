"use client";

import React from "react";
import ToolBar from "./ToolBar";
import PostContent from "./PostContent";
import TemplateSelecter from "./TemplateSelecter";

function Layout() {
  return (
    <div className="h-[100dvh] w-[100vw] p-2">
      <div className="fixed top-0 left-0 right-0 z-10">
        <ToolBar />
      </div>

      <div className="h-[94vh] mt-[40px] overflow-hidden flex flex-row justify-center">
        <div className="w-[80%] flex justify-center items-center">
          <PostContent />
        </div>
        <div className="w-[20%]">
          <TemplateSelecter />
        </div>
      </div>
    </div>
  );
}

export default Layout;
