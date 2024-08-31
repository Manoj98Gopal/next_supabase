import React, { useContext } from "react";
import { MyContext } from "@/Context/ContextProvider";
import PostTitle from "./PostTitle";

function PostContent() {
  const { globalState } = useContext(MyContext);

  const { width, height } = globalState.postSize;
  const zoom = globalState.zoom;

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${parseFloat(zoom) / 100})`,
        transformOrigin: "center",
        transition: "width 0.3s ease, height 0.3s ease, transform 0.3s ease",
        backgroundImage: "url('/bgImage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <PostTitle />
    </div>
  );
}

export default PostContent;
