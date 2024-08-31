import React from "react";

function Card({ logo, company_name, job_title,borderColor }) {
  return (
    <div
      className="flex flex-row gap-4"
      style={{
        border: `1px solid ${borderColor}`,
        padding: "30px 18px",
        borderRadius: "35px",
        boxShadow: "0px 23.191px 46.383px 0px rgba(0, 0, 0, 0.10)",
        background: "#fff",
      }}
    >
      <div className="border border-[#dedede] p-[10px] rounded-full h-[60px] w-[60px]">
        <img src={logo} className="w-[40px] rounded-full" />
      </div>
      <div className="flex-1">
        <p className="text-[#909090] font-poppins text-[23px] font-medium">
          {company_name}
        </p>
        <h1 className="text-[#141414] font-poppins text-[28px] font-medium leading-[1.21815]">
          {job_title}
        </h1>
      </div>
    </div>
  );
}

export default Card;
