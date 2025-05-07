import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Avatar, MainLogo } from "public/images";
import { useNavbar } from "@/hooks/useNavbar";

const Navbar = () => {
  const { isAuth, handleLogIn, handleLogOut } = useNavbar();
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
        {isAuth ? (
          <>
            <Link href={"/create"}>
              <p className="text-primary">Create</p>
            </Link>
            <button onClick={handleLogOut}>Logout</button>
            <button onClick={() => {}}>
              <Image src={Avatar} alt="avatar" />
            </button>
          </>
        ) : (
          <button onClick={handleLogIn}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
