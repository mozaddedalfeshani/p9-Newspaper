import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
export default function Header() {
  return (
    <div className="flex items-center flex-col gap-2 justify-center my-2">
      <div>
        <img src={logo} className="w-[471px] h-[60px]"></img>
      </div>
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      {moment().format("dddd, MMMM Do YYYY")}
    </div>
  );
}
