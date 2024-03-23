import Image from "next/image";
import LayoutNav from "../../layouts/nav";
import front from "../../../public/front.webp";
export default function InterFaceHome() {
  return (
    <LayoutNav>
      <div className="w-full h-full flex items-center justify-center ">
        <h1 className="text-2xl pt-6 text-gray-200">
          Bem Vindo, <span className="text-2xl text-green-700">Mateus</span>
        </h1>
      </div>
      <div className="text-white w-full flex items-center justify-center ">
        <div className="w-4/12">
          <h2 className="text-2xl pt-4 text-gray-200">Categorias</h2>
        </div>
      </div>
    </LayoutNav>
  );
}
