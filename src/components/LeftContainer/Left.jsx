import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";

const Left = () => {
  return (
    <div className="border-r-[1px] border-zinc-800 w-16 md:w-[275px] min-h-screen flex flex-col items-center md:items-start py-3 md:pl-15 ">
      <div className="logo invert w-8">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>
      <SideBar ></SideBar>
    </div>
  );
};

export default Left;
