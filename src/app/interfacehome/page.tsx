import LayoutNav from "../../layouts/nav";
import CardHome from "@/components/CardHome/CardHome";
import next from "../../../public/next.webp";
import front from "../../../public/front.webp";
import node from "../../../public/node.webp";
import Destaques from "@/components/destaques/destaques";

const languages = [
  { name: "Front-end", image: front, route: "front" },
  { name: "Next.js", image: next, route: "front" },
  { name: "Node.js", image: node, route: "front" },
];

export default function InterFaceHome() {
  return (
    <LayoutNav>
      <div className="w-full h-full flex items-center justify-center ">
        <h1 className="text-2xl pt-6 text-gray-200">
          Bem Vindo, <span className="text-2xl text-roseColor">Mateus</span>
        </h1>
      </div>
      <div className="text-white w-full flex items-center justify-center ">
        <div className="w-4/12">
          <h2 className="text-2xl pt-4 text-gray-200">Categorias</h2>
        </div>
      </div>

      <CardHome languages={languages} />

      <Destaques />
    </LayoutNav>
  );
}
