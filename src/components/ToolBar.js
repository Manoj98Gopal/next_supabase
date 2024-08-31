import { dimentions } from "@/constants/AppConstant";
import { MyContext } from "@/Context/ContextProvider";
import React, { useContext } from "react";

function ToolBar() {
  const { globalState, globalDispatch } = useContext(MyContext);

  const { width, height } = globalState.postSize;
  const zoom = globalState.zoom;

  const handlePresetChange = (e) => {
    const preset = e.target.value;
    const result = dimentions[preset];
    globalDispatch({ type: "postSize", payload: result });
  };

  const handleZoomChange = (e) => {
    const zoom = e.target.value;

    globalDispatch({ type: "zoom", payload: zoom });
  };

  return (
    <div className="relative z-10 flex flex-row items-center justify-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-lg">
      <h5 className="text-sm font-medium text-gray-700">Preset:</h5>
      <select
        onChange={handlePresetChange}
        className="w-28 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="default">Default</option>
        <option value="linkedin">LinkedIn</option>
        <option value="insta">Instagram</option>
        <option value="facebook">Facebook</option>
      </select>
      <h5 className="text-sm font-medium text-gray-700">Dimensions:</h5>
      <div className="flex items-center space-x-2">
        <input
          value={width}
          onChange={(e) => {}}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Width"
        />
        <span className="text-gray-700">x</span>
        <input
          value={height}
          onChange={(e) => {}}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Height"
        />
      </div>

      <h5 className="text-sm font-medium text-gray-700">Zoom:</h5>
      <select
        value={zoom}
        onChange={handleZoomChange}
        className="w-28 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="150%">150%</option>
        <option value="100%">100%</option>
        <option value="75%">75%</option>
        <option value="50%">50%</option>
      </select>
    </div>
  );
}

export default ToolBar;
