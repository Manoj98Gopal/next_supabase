import React from "react";

function PostTitle({
  fontSize,
  fontColor,
  fontWeight,
  dropShadowValue,
  letterSpacing,
  lineHeight,
  marginTop,
}) {
  return (
    <div
      className={`text-center font-${fontWeight} drop-shadow-[${dropShadowValue}] font-poppins tracking-[${letterSpacing}] leading-[${lineHeight}] mt-[${marginTop}] `}
      style={{
        color: fontColor,
        fontSize: fontSize,
        transition: "all 0.3s ease",

      }}
    >
      Product Manager
    </div>
  );
}

export default PostTitle;
