"use client";

import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  return (
    <header className="border-b-[1px] px-8 pt-1">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <span className="logo font-bold text-2xl text-blue-500 cursor-pointer">
            NecSocial
          </span>
        </Link>
        <div className="flex justify-center ">
          <Link
            href="/"
            className={
              router === "/"
                ? "cursor-pointer border-b-4 w-32 h-16 flex justify-center items-center border-blue-500 text-blue-500 "
                : "cursor-pointer hover:bg-neutral-700 w-28 h-14 hover:rounded-2xl flex justify-center items-center"
            }
          >
            <HomeIcon className="w-7 h-7 " />
          </Link>
          <Link
            href="/2"
            className={
              router === "/2"
                ? "cursor-pointer border-b-4 w-32 h-16 flex justify-center items-center border-blue-500 text-blue-500 "
                : "cursor-pointer  hover:bg-neutral-700 w-28 h-14 hover:rounded-2xl flex justify-center items-center"
            }
          >
            <OndemandVideoIcon className="w-7 h-7" />
          </Link>
          <Link
            href="/3"
            className={
              router === "/3"
                ? "cursor-pointer border-b-4 w-32 h-16 flex justify-center items-center border-blue-500 text-blue-500 "
                : "cursor-pointer hover:bg-neutral-700 w-28 h-14 hover:rounded-2xl flex justify-center items-center"
            }
          >
            <ChatIcon className="w-7 h-7 " />
          </Link>
        </div>
        <div>profil</div>
      </nav>
    </header>
  );
};

export default Navbar;
