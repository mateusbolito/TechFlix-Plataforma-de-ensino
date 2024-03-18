"use client";

import Image from "next/image";
import tech from "../../../public/tech.svg";
import { FiSearch } from "react-icons/fi";
import Profile from "../profile/profile";
import { DiAptana } from "react-icons/di";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="text-white  flex items-center justify-center border-b-[1px] border-zinc-600 ">
      <nav className="w-full h-20 bg-background opacity-80  flex p-4">
        <div className="flex items-center justify-center w-[300px]  ">
          <Image src={tech} width={200} height={200} alt="aaa" />
        </div>

        <div className="flex relative flex-row items-center justify-center max-w-7xl w-full">
          <form>
            <div className="absolute  mt-3 pl-3 ">
              <FiSearch size={20} />
            </div>
            <input
              type="search"
              className="w-[470px] p-2.5 pl-10 cursor-pointer  bg-zinc-950 border-none  outline-none  h-11 bg-transparent border border-b-gray-300 rounded-lg"
              placeholder="Busque assuntos e aulas"
            />
          </form>
        </div>
        <div className=" flex  flex-row items-center gap-5">
          <button className="hover:bg-zinc-800 flex items-center justify-center rounded-2xl w-12 h-12">
            <DiAptana size={30} color="#15803d" />
          </button>
          <button className="hover:bg-zinc-800 flex items-center justify-center rounded-2xl w-12 h-12">
            <MdNotificationsActive size={30} color="#15803d" />
          </button>
          <button
            className=" flex items-center justify-center rounded-2xl w-12 h-12"
            onClick={openModal}
          >
            <img
              src="https://avatars.githubusercontent.com/u/114631986?s=400&u=4c67d16c5e1f3b0e51b84426a3bb552cc0e8a442&v=4"
              alt=""
              className="rounded-full"
            />
          </button>
        </div>
      </nav>

      {open && <Profile closeModal={closeModal} />}
    </div>
  );
}
