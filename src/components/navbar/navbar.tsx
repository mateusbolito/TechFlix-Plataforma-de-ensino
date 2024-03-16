import Image from "next/image";
import tech from "../../../public/tech.svg";
import { FiSearch } from "react-icons/fi";

export default function NavBar() {
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
        <div className=" flex items-center gap-3">
          <button className="bg-emerald-400 rounded-2xl w-12 h-12"></button>
          <button className="bg-emerald-400 rounded-2xl w-12 h-12">aa</button>
          <button className="bg-emerald-400 rounded-2xl w-12 h-12">aa</button>
        </div>
      </nav>
    </div>
  );
}
