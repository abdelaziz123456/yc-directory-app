// import {  SectionBg } from 'public/images'
import React from "react";
import SectionBG from "public/images/Section.jpg";
import Image from "next/image";
import { SearchIcon } from "public/images";

const HomeSection = () => {
  return (
    <div
      className="   min-h-[531px] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${SectionBG.src})` }}
    >
      <div className="bg-yellow px-4 py-3 rounded-md">
        <p className="font-bold text-[17px] uppercase">Pitch, Vote, and Grow</p>
      </div>

      <div className="text-center mt-4 bg-black px-5 py-4">
        <p className="text-white text-[54px] font-extrabold leading-[64px] uppercase font-work-sans">
          Pitch Your Startup,
          <br /> Connect with Entrepreneurs
        </p>
      </div>

      <p className="text-center text-white text-[20px] font-medium mt-4 mb-5">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>

      <div className="flex justify-between items-center w-full max-w-[700px] bg-white rounded-[80px] px-4 py-2 border-5 ">
        <input
          type="search"
          placeholder="Search startup "
          className="px-4 py-2 rounded-md bg-white hover:outline-none focus:outline-none placeholder:text-gray-950  placeholder:font-extrabold placeholder:uppercase"
        />
        <Image src={SearchIcon} alt="search" />
      </div>
    </div>
  );
};

export default HomeSection;
