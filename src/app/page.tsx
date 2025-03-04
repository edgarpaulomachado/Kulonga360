'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Redirect to dashboard on successful login or registration
    try {
      router.push("../dashboard");
    } catch (error) {
      console.error("Failed to redirect:", error);
    }
  }

  return (
    <div className="flex w-auto h-screen bg-gray-800 items-center justify-center">
      <div className="w-[400px] bg-white text-center rounded-2xl p-5 transition-all duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-center text-black text-xl font-bold">
          {isLogin ? "Iniciar Sessão" : "Cadastre-se com a Kulonga360"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col p-10 opacity-0 animate-fade-in">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Nome"
                className="w-full py-2 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none bg-gray-200 rounded-xl mb-5"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none bg-gray-200 rounded-xl mb-5"
              />
            </>
          )}
          <input
            type="password"
            placeholder="Senha"
            className="w-full py-2 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none bg-gray-200 rounded-xl mb-5"
          />

          <button type="submit" className="w-full h-10 bg-green-500 rounded text-white hover:bg-green-600 transition duration-200">
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
          <p className="text-black mt-5 text-sm">
            {isLogin ? "Não tem uma conta?" : "Já tenho uma conta,"} 
            <button type="button" onClick={isLogin ? handleRegisterClick : handleLoginClick} className="text-blue-400 underline">
              {isLogin ? " Cadastre-se" : " Iniciar sessão"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
       
