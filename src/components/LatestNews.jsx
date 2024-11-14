import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function LatestNews() {
  return (
    <div className="flex items-center justify-center bg-base-300 p-2">
      <p className="bg-[#D72050] text-white w-[110px] flex items-center justify-center h-[48px]">
        Latest
      </p>
      <Marquee pauseOnHover={true}>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          exercitationem neque odit eveniet? Obcaecati in ipsum deserunt nostrum
          hic alias?
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          exercitationem neque odit eveniet? Obcaecati in ipsum deserunt nostrum
          hic alias?
        </Link>
      </Marquee>
    </div>
  );
}
