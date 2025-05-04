import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Avatar, MainLogo } from "public/images";

const Navbar = () => {
  return (
    <div className="h-[80px] flex justify-between items-center mx-15">
      <div>
        <Link href={"/"}>
          <Image
            src={MainLogo}
            alt="main logo"
            className="w-[143px] h-[100px]"
          />
        </Link>
      </div>

      <div className="flex gap-8 items-center font-semibold font-">
        <Link href={"/create"}>
          <p className="text-primary">Create</p>
        </Link>
        <Link href={"/logout"}>Logout</Link>
        <Link href={"/logout"}>
          <Image src={Avatar} alt="avatar" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
