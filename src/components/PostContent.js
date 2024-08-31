import React, { useContext, useRef } from "react";
import { MyContext } from "@/Context/ContextProvider";
import PostTitle from "./PostTitle";
import PostSubtitle from "./PostSubtitle";
import PostMain from "./PostMain";
import html2canvas from "html2canvas";

function PostContent() {
  const { globalState } = useContext(MyContext);
  const postRef = useRef(null);

  const { width, height } = globalState.postSize;
  const zoom = globalState.zoom;
  const { background, title, subTitle, cardBorderColor } =
    globalState.templateStyle;

  const logo =
    "https://res.cloudinary.com/kalibre-ai/image/upload/v1715771480/icons/kalibre_logo_k41tiq.svg";

  const handleDownload = async () => {
    const element = postRef.current;

    // Temporarily remove scaling transformation
    element.style.transform = "none";

    const canvas = await html2canvas(element, {
      scale: 5, // Higher scale for better quality
      useCORS: true,
    });

    // Restore the scaling transformation
    element.style.transform = `scale(${parseFloat(zoom) / 100})`;

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "post-image.png";
    link.click();
  };

  return (
    <>
      <div
        ref={postRef}
        className="bg-white shadow-md rounded-lg p-4 relative"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${parseFloat(zoom) / 100})`,
          transformOrigin: "center",
          transition: "all 0.3s ease",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PostTitle {...title} />
        <PostSubtitle {...subTitle} />
        <PostMain borderColor={cardBorderColor} />

        <img
          src={logo}
          className="absolute bottom-1 right-1 m-4"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "129px",
            maxHeight: "41px",
          }}
        />
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Download Image
      </button>
    </>
  );
}

export default PostContent;
