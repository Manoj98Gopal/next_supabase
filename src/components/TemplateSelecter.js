"use client";

import { templates } from "@/constants/AppConstant";
import { MyContext } from "@/Context/ContextProvider";
import React, { useContext, useState } from "react";

function TemplateSelecter() {
  const { globalState, globalDispatch } = useContext(MyContext);

  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const handleChangeTemplate = (data) => {
    setSelectedTemplate(data.id);

    globalDispatch({ type: "templateStyle", payload: data.templateStyle });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-semibold mb-8 text-center">
        Select a Template
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleChangeTemplate(template)}
            className={`p-4 border rounded-lg cursor-pointer transition-transform transform ${
              selectedTemplate === template.id
                ? "scale-105 border-blue-500"
                : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-medium text-center">{template.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelecter;
