import React, { useContext, useRef, useState } from "react";
import { MyContext } from "@/Context/ContextProvider";
import PostTitle from "./PostTitle";
import PostSubtitle from "./PostSubtitle";
import PostMain from "./PostMain";

const localNode = "http://localhost:5432/generate-image";

function PostContent() {
  const { globalState } = useContext(MyContext);
  const postRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const { width, height } = globalState.postSize;
  const zoom = globalState.zoom;
  const { background, title, subTitle, cardBorderColor } =
    globalState.templateStyle;

  const logo =
    "https://res.cloudinary.com/kalibre-ai/image/upload/v1715771480/icons/kalibre_logo_k41tiq.svg";

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const clonedPost = postRef.current.cloneNode(true);
      clonedPost.style.transform = "";
      const htmlContent = clonedPost.outerHTML;

      const response = await fetch(localNode, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent,
          width,
          height,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();

    } catch (error) {
      console.error("Error downloading the image:", error);
    } finally {
      setIsDownloading(false);
    }
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PostTitle {...title} />
        <PostSubtitle {...subTitle} />
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        disabled={isDownloading}
      >
        {isDownloading ? "Downloading..." : "Download Image"}
      </button>
    </>
  );
}

export default PostContent;

// html to canva method

// if (postRef.current) {
//   try {
//     // Temporarily remove any transform on the post container
//     const originalTransform = postRef.current.style.transform;
//     postRef.current.style.transform = "none";

//     const canvas = await html2canvas(postRef.current, {
//       scale: 2, // Increase scale for better quality
//       useCORS: true, // This is important for loading cross-origin images
//       logging: false, // Set to true for debugging
//       backgroundColor: null, // Preserve transparency
//     });

//     // Restore the original transform
//     postRef.current.style.transform = originalTransform;

//     // Convert canvas to blob
//     canvas.toBlob((blob) => {
//       if (blob) {
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "post-image.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         URL.revokeObjectURL(url);
//       }
//     }, "image/png");
//   } catch (error) {
//     console.error("Failed to download the image:", error);
//   }
// }

// html to png image

// setIsDownloading(true);
// try {
//   // Create a clone of the post content
//   const clone = postRef.current.cloneNode(true);

//   // Reset the transform and set explicit dimensions
//   clone.style.transform = "none";
//   clone.style.width = `${width}px`;
//   clone.style.height = `${height}px`;

//   // Temporarily append the clone to the body
//   document.body.appendChild(clone);

//   const dataUrl = await toPng(clone, {
//     quality: 0.95,
//     width: width,
//     height: height,
//   });

//   // Remove the clone from the body
//   document.body.removeChild(clone);

//   // Create a link element, set the download attribute and click it
//   const link = document.createElement("a");
//   link.download = "post-image.png";
//   link.href = dataUrl;
//   link.click();
// } catch (err) {
//   console.error("Error generating or downloading the image:", err);
// } finally {
//   setIsDownloading(false);
// }

// browser code

{
  /* <div
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
<PostTitle {...title} /> */
}
{
  /* <PostSubtitle {...subTitle} /> */
}
{
  /* <PostMain borderColor={cardBorderColor} /> */
}

{
  /* <img
  src={logo}
  className="absolute bottom-1 right-1 m-4"
  style={{
    width: "auto",
    height: "auto",
    maxWidth: "129px",
    maxHeight: "41px",
  }}
  alt="logo"
/> */
}
{
  /* </div> */
}
