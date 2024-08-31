import React, { useContext } from "react";
import { MyContext } from "@/Context/ContextProvider";
import PostTitle from "./PostTitle";

function PostContent() {
  const { globalState } = useContext(MyContext);

  const { width, height } = globalState.postSize;
  const zoom = globalState.zoom;
  const { background, title } = globalState.templateStyle;

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${parseFloat(zoom) / 100})`,
        transformOrigin: "center",
        transition: "width 0.3s ease, height 0.3s ease, transform 0.3s ease",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <PostTitle {...title} />
    </div>
  );
}

export default PostContent;
