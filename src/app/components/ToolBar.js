import React, { useState } from "react";

function ToolBar({ width = 500, height = 700, setWidth, setHeight }) {
  return (
    <div className="relative z-10 flex flex-row items-center justify-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-lg">
      <h5 className="text-sm font-medium text-gray-700">Dimensions:</h5>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Width"
        />
        <span className="text-gray-700">x</span>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Height"
        />
      </div>
    </div>
  );
}

export default ToolBar;
