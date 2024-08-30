import React from "react";

function MainContent({ width, height }) {
  return (
    <div className=" flex flex-row justify-center items-center h-[calc(100vh-90px)] z-0">
      <div
        style={{
          width: `${width}px`,
          backgroundColor: "#fff",
          height: `${height}px`,
          backgroundImage: "url('/bgImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default MainContent;
