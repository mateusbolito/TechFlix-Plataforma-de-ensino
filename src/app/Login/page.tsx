"use client";

import teste from "../../../public/teste.svg";
import Image from "next/image";
import tech from "../../../public/tech.svg";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3333/login", {
        email,
        password,
      });
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      window.location.href = "/interfacehome";
    } catch (error) {
      setError("Usuário não autenticado. Verifique suas credenciais.");
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold -tracking-tight text-gray-900">
          Entrar na sua conta
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email adrres
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Esquece sua senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400  focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Esqueceu a senha? {""}{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            começa dia 14
          </a>
        </p>
      </div>
    </div>
  );
}
