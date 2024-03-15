import Image from "next/image";
import tech from "../../../public/tech.svg";
import { FiSearch } from "react-icons/fi";
import Layout from "@/componentes/layout/nav";
export default function InterFaceHome() {
  return (
    <Layout />
    // <div>
    //   <div className="text-white  flex items-center justify-center border-b-[1px] border-emerald-950 ">
    //     <nav className="w-full h-20 bg-background opacity-80 shadow-xl flex p-4">
    //       <div className="flex items-center justify-center w-[300px]  ">
    //         <Image src={tech} width={200} height={200} alt="aaa" />
    //       </div>

    //       <div className="flex flex-row items-center justify-center max-w-7xl w-full">
    //         <form>
    //           <div className="absolute  mt-3 pl-3 flex items-center justify-center pointer-events-none">
    //             <FiSearch className="" />
    //           </div>
    //           <input
    //             type="search"
    //             className="w-[470px] p-2.5 pl-10 cursor-pointer  bg-zinc-950 border-none  outline-none  h-10 bg-transparent border border-b-gray-300 rounded-lg"
    //             placeholder="Busque assuntos e aulas"
    //           />
    //         </form>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
}
