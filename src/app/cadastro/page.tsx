"use client";

import teste from "../../../public/teste.svg";
import Image from "next/image";
import tech from "../../../public/tech.svg";
import { FaEye } from "react-icons/fa";
import { useEffect, useState, useRef, FormEvent } from "react";
import { api } from "../../service/axios";

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  password: string;
}
export default function Register() {
  const [showpassword, setShowpassword] = useState(false);
  const [datas, setData] = useState<CustomerProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAPI();
  }, []);

  async function getAPI() {
    const response = await api.get("/customers");
    setData(response.data);
  }
  const visiblePassword = () => {
    setShowpassword(!showpassword);
  };
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const nameInput = nameRef.current?.value;
    const emailInput = emailRef.current?.value;
    const passInput = passRef.current?.value;

    if (!nameInput || !emailInput || !passInput) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post("/register", {
        name: nameInput,
        email: emailInput,
        password: passInput,
      });

      if (response.status === 200) {
        window.location.href = "/";
      } else {
        const data = await response.data();
        alert(data.error || "Erro ao fazer cadastro.");
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
      alert("Erro ao fazer cadastro. Por favor, tente novamente mais tarde.");
    }
    setLoading(false);
  }

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
          <form action="submit" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite seu nome"
              required
              className="w-[400px]  flex flex-col h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
              ref={nameRef}
            />

            <input
              type="email"
              placeholder="Digite seu Email"
              required
              className="w-[400px] mt-16 flex flex-col h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
              ref={emailRef}
            />

            <div className="relative">
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Digite sua Senha"
                required
                className="w-[400px] mt-16 h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
                ref={passRef}
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
                ref={passRef}
              />
              <FaEye
                onClick={visiblePassword}
                color="#fff"
                className="absolute top-[72px] right-[10px] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-center pt-16">
              <button className="w-[200px] h-[40px] font-semibold rounded-lg text-gray-200 bg-green-700 hover:bg-emerald-700 hover:opacity-85">
                {loading ? <span>Cadastrando Usuario...</span> : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>

      <div className="w-1/2 h-full relative">
        <Image src={teste} style={{ width: "100%", height: "auto" }} alt="a" />
      </div>
    </div>
  );
}
