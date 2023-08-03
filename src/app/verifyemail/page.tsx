"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import './VerifyEmail.scss';
import React, { useEffect, useState } from "react";
import Image from "next/image";


const VerifyEmail = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log(urlToken);
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifiedUserEmail();
    }
  }, [token]);

  const verifiedUserEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerifiedEmail(true);
      toast.success(response.data.message || "Email verificado com sucesso!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="VerifyEmail">
      <div className="VerifyEmail__container">
        <div className="VerifyEmail__logo-container">
          <Image
            src="/assets/logo-wr.png"
            alt="Logo"
            fill
            objectFit="contain"
            />
        </div>
        <h1>Verificando o seu email</h1>
        {!loading && verifiedEmail ? (
          <p>Email verificado com sucesso!
            <br />
            Você será redirecionado para a página de login.
          </p>
        ) : (
          <p>Verificando email...</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
