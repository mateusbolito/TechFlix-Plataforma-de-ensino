import LayoutNav from "../../layouts/nav";
import { DiAptana } from "react-icons/di";
import { TbCertificate } from "react-icons/tb";
import { SlPresent } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";
export default function InterFaceHome() {
  return (
    <LayoutNav>
      <div className="flex items-center justify-center">
        <div className="  w-[300px] h-[260px] bg-zinc-950 rounded-lg shadow-lg  mt-20">
          <div className="text-white">
            <h2 className="text-center p-3 border-b-[1px] border-zinc-600 ">
              nome: mateus bolito
            </h2>
            <div className="h-10 mt-2">
              <h2 className="flex items-center gap-2  cursor-pointer hover:bg-zinc-700 ">
                <DiAptana size={27} className="ml-4 " color="#022c22" />
                <div className="flex flex-col">
                  <span>Minha Conta</span>
                  <p className="text-[10px] text-zinc-300">
                    gerencia sua conta
                  </p>
                </div>
              </h2>
            </div>
            <div className="h-10 mt-2">
              <h2 className="flex items-center gap-2  cursor-pointer hover:bg-zinc-700 ">
                <TbCertificate size={27} className="ml-4 " color="#022c22" />
                <div className="flex flex-col">
                  <span>Certificados</span>
                  <p className="text-[10px] text-zinc-300">
                    Veja todos os seus certificados
                  </p>
                </div>
              </h2>
            </div>
            <div className="h-10 mt-2">
              <h2 className="flex items-center gap-2  cursor-pointer hover:bg-zinc-700 ">
                <SlPresent size={27} className="ml-4 " color="#022c22" />
                <div className="flex flex-col">
                  <span>Indique e ganhe</span>
                  <p className="text-[10px] text-zinc-300">
                    Ganhe beneficios por indicaçao
                  </p>
                </div>
              </h2>
            </div>
            <div className="h-10 mt-2">
              <h2 className="flex items-center gap-2 h-[58px] cursor-pointer hover:bg-zinc-700  border-t-[1px] border-zinc-600">
                <IoIosLogOut size={27} className="ml-4 " color="#f87171" />
                <div className="flex flex-col">
                  <span className="text-red-400 text-[14px] ">
                    Sair da Conta
                  </span>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </LayoutNav>
  );
}
