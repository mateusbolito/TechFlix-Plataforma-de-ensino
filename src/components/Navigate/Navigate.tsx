import { FaUser } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";
import { GiPresent } from "react-icons/gi";
export default function Navigate() {
  return (
    <div className="flex items-center justify-center">
      <ul className="flex mt-7 gap-16 font-semibold text-roseColor ">
        <li>
          <a
            href=""
            className="hover:text-violet-200 duration-75 flex items-center justify-center gap-2"
          >
            Catalogo
            <GrCatalog size={16} className="hover:text-slate-800" />
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-violet-200 duration-75 flex items-center justify-center gap-2"
          >
            Perfil
            <FaUser size={16} className="hover:text-slate-800" />
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-violet-200 duration-75 flex items-center justify-center gap-2"
          >
            Bonus
            <GiPresent size={16} className="hover:text-slate-800" />
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-violet-200 duration-75 flex items-center justify-center gap-2"
          >
            Certificados
            <TbCertificate size={16} className="hover:text-slate-800" />
          </a>
        </li>
      </ul>
    </div>
  );
}
