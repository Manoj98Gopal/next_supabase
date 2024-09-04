import React from 'react';

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
  color
}) {
  return (
    <div className="flex items-center justify-center mt-20" >
      <div
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          border: borderData,
          borderRadius: borderRadius,
          background: background,
          padding: padding,
          color: color,
          display: 'block',
          transition: 'all 0.3s ease',
        }}
      >
        Jobs in Bengaluru
      </div>
    </div>
  );
}

export default PostSubtitle;