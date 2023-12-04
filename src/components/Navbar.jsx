"use client";

import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const [showCompte, setShowCompte] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleShowCompte = () => {
    setShowCompte(!showCompte);
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header className="border-b-[1px] px-4 pt-1">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <form action="">
            {showSearch ? (
              <div className="flex gap-3 cursor-pointer">
                <div className="hover:bg-neutral-500 text-white p-2 rounded-full">
                  <ArrowBackIcon onClick={handleShowSearch} />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher... "
                  className="bg-neutral-700 rounded-full pl-4 py-2 w-full outline-none"
                />
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/">
                  <span className="logo font-bold text-2xl text-blue-500 cursor-pointer">
                    NecSocial
                  </span>
                </Link>
                <SearchIcon className="absolute w-6 h-6 text-gray-400 ml-36 mt-1" />
                <input
                  type="text"
                  placeholder="Rechercher ..."
                  className="bg-neutral-700 rounded-full pl-11 py-2 w-full outline-none"
                  onClick={handleShowSearch}
                />
              </div>
            )}
          </form>
          <div className="flex justify-center">
            <Link
              href="/"
              className={
                router === "/"
                  ? "group/item  cursor-pointer border-b-4 w-32 h-16 flex justify-center items-center border-blue-500 text-blue-500 "
                  : "group/item cursor-pointer hover:bg-neutral-700 w-28 h-14 hover:rounded-2xl flex justify-center items-center"
              }
            >
              <HomeIcon className="w-7 h-7 " />
              <div className="absolute bottom-[640px] z-50 bg-white px-4 py-1  rounded-lg text-blue-950 group/edit invisible hover:bg-slate-200  group-hover/item:visible ">
                Accueil
              </div>
            </Link>
            <Link
              href="/2"
              className={
                router === "/2"
                  ? "group/item cursor-pointer border-b-4 w-32 h-16 flex justify-center items-center border-blue-500 text-blue-500 "
                  : "group/item cursor-pointer  hover:bg-neutral-700 w-28 h-14 hover:rounded-2xl flex justify-center items-center"
              }
            >
              <OndemandVideoIcon className="w-7 h-7" />
              <div className="absolute bottom-[640px] z-50 bg-white px-4 py-1  rounded-lg text-blue-950 group/edit invisible hover:bg-slate-200  group-hover/item:visible ">
                Vidéo
              </div>
            </Link>
            <Link
              href="/3"
              className={
                router === "/3"
                  ? "group/item cursor-pointer border-b-4 w-32 h-16 flex justify-center items-center border-blue-500 text-blue-500 "
                  : "group/item cursor-pointer hover:bg-neutral-700 w-28 h-14 hover:rounded-2xl flex justify-center items-center"
              }
            >
              <ChatIcon className="w-7 h-7 " />
              <div className="absolute bottom-[640px] z-50 bg-white px-4 py-1  rounded-lg text-blue-950 group/edit invisible hover:bg-slate-200  group-hover/item:visible ">
                Messenger
              </div>
            </Link>
          </div>
        </div>
        <div className="group/item cursor-pointer" onClick={handleShowCompte}>
          <img
            src="/navbar/noavatar.png"
            alt="profile"
            className="rounded-full w-10 h-10 cursor-pointer"
          />
          <div className="absolute bottom-[640px] right-4 z-50 bg-white px-4 py-1   rounded-lg text-blue-950 group/edit invisible hover:bg-slate-200  group-hover/item:visible ">
            Compte
          </div>
          {showCompte ? (
            <div className="absolute top-16 right-4 z-50 bg-white px-4 py-1 rounded-lg text-blue-950">
              <div className="flex flex-col gap-2">
                <Link href="/profile" className="border-b pb-1">
                  <div className="flex items-center gap-3 hover:rounded-lg pl-3 pr-16 hover:text-white py-4 hover:bg-zinc-700">
                    <img
                      src="/navbar/noavatar.png"
                      alt="profile"
                      className="rounded-full border w-10 h-10 cursor-pointer"
                    />
                    <span className="cursor-pointer">Éric Colday Noubissi</span>
                  </div>
                </Link>
                <Link href="/settings" className="border-b pb-1">
                  <div className="flex items-center gap-3 hover:rounded-lg pl-3 pr-16 hover:text-white py-4 hover:bg-zinc-700">
                    <div className="bg-neutral-500 text-white p-2 rounded-full">
                      <DarkModeIcon />
                    </div>
                    <span className="cursor-pointer">Mode sombre</span>
                  </div>
                </Link>
                <Link href="/logout" className="border-b pb-1">
                  <div className="flex items-center gap-3 hover:rounded-lg pl-3 pr-16 hover:text-white py-4 hover:bg-zinc-700">
                    <div className="bg-neutral-500 text-white p-2 rounded-full">
                      <LogoutIcon />
                    </div>
                    <span className="cursor-pointer">Déconnexion</span>
                  </div>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
