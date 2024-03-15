"use client";

import teste from "../../../public/teste.svg";
import Image from "next/image";
import tech from "../../../public/tech.svg";
import Link from "next/link";
import { FormEvent, use, useEffect, useState } from "react";
import { logOut, login, onAuthChanged } from "@/firebase/authService";
import {
  GithubAuthProvider,
  User,
  getAuth,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>();
  const router = useRouter();

  async function handlerLogin(event: FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    const passwordInput = form.querySelector(
      'input[type="password"]'
    ) as HTMLInputElement;
    if (emailInput && passwordInput) {
      login(emailInput.value, passwordInput.value)
        .then((user) => {
          router.push("/interfacehome");
          console.log(user);
        })
        .catch((error) => alert("error aqui"));
    } else {
      alert("Campos de email e senha não encontrados!");
    }
  }
  useEffect(() => {
    function unsubscribe() {
      return onAuthChanged((user) => {
        setUser(user);
        if (user) {
          setUser(user);
        } else {
          setUser(user);
        }
      });
    }
    return unsubscribe();
  }, []);

  const provider = new GithubAuthProvider();
  function LoginGithub() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;

        const credential = GithubAuthProvider.credentialFromError(error);
      });
  }
  function LogOutGitHub() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push("/cadastro");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // const auth = getAuth();
  // signInWithRedirect(auth, provider);

  // function redirectUser() {
  //   const auth = getAuth();
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       const credential = GithubAuthProvider.credentialFromResult(result);
  //       if (credential) {
  //         const token = credential.accessToken;
  //       }
  //       const user = result?.user;
  //       router.push("/cadastro");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData?.email; // Use optional chaining to access email safely
  //       // The AuthCredential type that was used.
  //       const credential = GithubAuthProvider.credentialFromError(error);
  //     });
  //   redirectUser();
  // }

  return (
    <div className="flex">
      <div className="w-1/2 bg-background ">
        <div className="flex items-center justify-center h-20 mt-10">
          <Image src={tech} width={300} height={20} alt="tech" />
        </div>
        <h1 className="text-white text-3xl pt-14  flex items-center justify-center">
          Seja bem-vindo novamente!
        </h1>

        <span className=" text-gray-50 flex items-center justify-center text-[20px] p-2 ">
          Seu curso está esperando por você, venha progredir!
        </span>

        <div className="flex items-center justify-center p-10 ">
          <form action="submit" onSubmit={handlerLogin}>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu Email"
              required
              className="w-[400px] flex flex-col h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua Senha"
              required
              className="w-[400px] mt-16 h-[2.1rem] bg-transparent border rounded-lg border-solid pl-2 text-white"
            />

            <div className="flex items-center justify-between flex-row pt-4">
              <div className="flex items-center ">
                <input type="checkbox" />
                <span className="text-gray-200 ml-2">Lembrar-me</span>
              </div>
              <Link href={"/recuperar"} className="text-gray-200">
                Esqueceu a senha?
              </Link>
            </div>

            <div className="flex flex-col  items-center justify-center pt-16">
              <button className="w-[200px] h-[40px] font-semibold rounded-lg text-gray-200 bg-emerald-950 hover:bg-emerald-700 hover:opacity-85">
                Acessar
              </button>
              <button
                type="button"
                onClick={LoginGithub}
                className=" text-white mt-4 w-[200px] bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                </svg>
                Sign in with Github
              </button>
            </div>
            <h2 className="text-gray-200 flex items-center justify-center pt-4">
              Não tem uma conta ainda?
              <Link href={"/cadastro"} className="underline pl-2 ">
                Cadastre-se
              </Link>
            </h2>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <Image src={teste} style={{ width: "100%", height: "auto" }} alt="a" />
      </div>
    </div>
  );
}
