"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifiedUserEmail();
    }
  }, [token]);

  const verifiedUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerifiedEmail(true);
      toast.success(response.data.message || "Email verificado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="VerifyEmail">
      <h1>Verificar email</h1>
      <h2>{token ? token : "sem token"}</h2>
      {verifiedEmail ? (
        <p>Email verificado com sucesso!</p>
      ) : (
        <p>Verificando email...</p>
      )}
    </div>
  );
};

export default VerifyEmail;
