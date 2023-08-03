"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Forgottenpassword.scss";
import toast from "react-hot-toast";
import axios from "axios";

import { useRouter } from "next/navigation";

const Forgottenpassword = () => {
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const verifyEmail = () => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.match(regexEmail)) {
      toast.error("Email inválido.");
      return false;
    }
    return true;
  };

  const handleSumbitEmail = async (e: any) => {
    e.preventDefault();
    const isEmail = verifyEmail();
    if (!isEmail) return;
    try {
      console.log(email);
      const response = await axios.post("/api/users/forgottenpassword", {
        email,
      });
      console.log(response);
      if (response.status === 201) {
        toast.success("Email recuperar senha enviado com sucesso!");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.response.data.error || "Erro ao realizar o pedido!");
    }
  };
  return (
    <div className="Forgottenpassword">
      <div className="Forgottenpassword__container">
        <div className="Forgottenpassword__logo-container">
          <Image
            src="/assets/logo-wr.png"
            alt="Logo"
            fill
            objectFit="contain"
          />
        </div>
        <h1>Esqueceu sua senha?</h1>
        <form action="">
          <div className="Forgottenpassword__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button
            className="Forgottenpassword__btn"
            onClick={handleSumbitEmail}
          >
            Enviar
          </button>
        </form>
        <p>Insira seu email para recuperar sua senha.</p>
        <div className="Forgottenpassword__link">
          <Link href="/login">Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
};

export default Forgottenpassword;
