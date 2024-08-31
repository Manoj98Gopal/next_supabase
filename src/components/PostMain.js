import React from "react";
import Card from "./Card";
import { CardData } from "@/constants/AppConstant";

function PostMain({borderColor}) {
  return (
    <div className="mt-[114px] px-10 grid grid-cols-2 gap-8">
      {CardData.map((data, idx) => (
        <Card key={idx} {...data} borderColor={borderColor}/>
      ))}
    </div>
  );
}

export default PostMain;
