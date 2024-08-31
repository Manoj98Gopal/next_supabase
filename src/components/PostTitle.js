import React from "react";

function PostTitle({
  fontSize,
  fontColor,
  fontWeight,
  textShadow,
  letterSpacing,
  lineHeight,
  marginTop,
  fontFamily,
}) {
  return (
    <div
      className={`text-center font-poppins `}
      style={{
        color: fontColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        transition: "all 0.3s ease",
        marginTop: marginTop,
        letterSpacing: letterSpacing,
        textShadow: textShadow,
        fontFamily: fontFamily,
      }}
    >
      Product Manager
    </div>
  );
}

export default PostTitle;
