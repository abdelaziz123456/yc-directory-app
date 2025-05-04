// import {  SectionBg } from 'public/images'
import React from "react";
import SectionBG from "public/images/Section.jpg";
const HomeSection = () => {
  return (
    <div
      className="   min-h-[531px] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${SectionBG.src})` }}
    >
      <div className="bg-yellow px-4 py-3 rounded-md">
        <p className="font-bold text-[17px] uppercase">Pitch, Vote, and Grow</p>
      </div>

      <div className="text-center mt-4">
        <p>
          Pitch Your Startup,
          <br /> Connect with Entrepreneurs
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
