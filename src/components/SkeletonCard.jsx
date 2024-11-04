import React from "react";
import style from "../style/SkeletonLoader.module.css";

const SkeletonCard = () => {
  return (
    <div className="w-full min-w-[230px] max-w-[230px] bg-[#35373B] h-80  block rounded relative hover:scale-105 transition-all">
      <div className="bg-[#35373B]">
        <div className={`w-full overflow-hidden`}>
          <div className="px-3 py-3">
            <div
              className={`w-full mb-3 rounded-[5px] overflow-hidden h-[145px] bg-[#696969] `}
            >
              <div className={`${style.skeleton2}`}></div>
            </div>
            <div
              className={`h-5 w-full bg-[#696969] mb-3 rounded-[5px] overflow-hidden`}
            >
              <div className={`${style.skeleton3}`}></div>
            </div>
            <div
              className={`h-5 w-full bg-[#696969] mb-3 rounded-[5px] overflow-hidden`}
            >
              <div className={`${style.skeleton3}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2 flex flex-col items-start justify-center">
        <div
          className={`h-2 w-full bg-[#696969] mb-3 rounded-[5px] overflow-hidden`}
        >
          <div className={`${style.skeleton3}`}></div>
        </div>
        <div
          className={`h-2 w-1/2 bg-[#696969]  rounded-[5px] overflow-hidden`}
        >
          <div className={`${style.skeleton3}`}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
