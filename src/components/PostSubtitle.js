import React from "react";

function PostSubtitle({
  marginTop,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  borderData,
  borderRadius,
  background,
  padding,
  color,
}) {
  return (
    <div className="text-center">
      <div
        style={{
          textAlign: "center",
          marginTop: marginTop,
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          border: borderData,
          borderRadius: borderRadius,
          background: background,
          padding: padding,
          display: "inline-block",
          transition: "all 0.3s ease",
          color: color,
        }}
      >
        Jobs in Bengaluru
      </div>
    </div>
  );
}

export default PostSubtitle;
