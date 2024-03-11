"use client";

import teste from "../../../public/teste.svg";
import Image from "next/image";
import tech from "../../../public/tech.svg";
import { FaEye, FaUser } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [showpassword, setShowpassword] = useState(false);

  const visiblePassword = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-background ">
        <div className="flex items-center justify-center h-20 mt-10">
          <Image src={tech} width={300} height={20} alt="tech" />
        </div>
        <h1 className="text-white text-3xl pt-14  flex items-center justify-center">
          Cadastre-se!
        </h1>

        <span className=" text-gray-50 flex items-center justify-center text-[20px] p-2 ">
          Seu curso está esperando por você, venha progredir!
        </span>

        <div className="flex  items-center justify-center p-10 ">
          <form action="submit">
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              className="w-[400px]  flex flex-col h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
            />

            <input
              type="email"
              placeholder="Digite seu Email"
              required
              className="w-[400px] mt-16 flex flex-col h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
            />

            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Digite sua Senha"
                required
                className="w-[400px] mt-16 h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
              />
              <FaEye
                color="#fff"
                onClick={visiblePassword}
                className="absolute top-[72px] right-[10px] cursor-pointer"
              />
            </div>
            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Confirme sua Senha"
                required
                className="w-[400px] mt-16 h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
              />
              <FaEye
                onClick={visiblePassword}
                color="#fff"
                className="absolute top-[72px] right-[10px] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-center pt-16">
              <button
                type="submit"
                className="w-[200px] h-[40px] font-semibold rounded-lg text-gray-200 bg-green-600"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <Image src={teste} style={{ width: "100%", height: "auto" }} alt="a" />
      </div>
    </div>
  );
}
