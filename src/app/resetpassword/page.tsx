"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import "./ResetPassword.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [viewPasswords, setviewPasswords] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    console.log(urlToken);
    setToken(urlToken || "");
  }, []);

  const handleChangePassword = async () => {
    const passwordVerified = verifyPassword();
    if (!passwordVerified) return toast.error("Algo de errado aconteceu, tente novamente mais tarde!")
    if (token.length === 0) {
      return toast.error(
        "Algo de errado aconteceu, tente novamente mais tarde!"
      );
    } else {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/resetpassword", {
          token,
          password,
        });
        setVerifiedEmail(true);
        toast.success(response.data.message || "Password alterada com sucesso!");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleViewPasswords = () => {
    setviewPasswords(!viewPasswords);
  };

  const verifyPassword = async () => {
    console.log(password,confirmPassword)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.length === 0 || confirmPassword.length === 0) {
      return toast.error("Preencha todos os campos!");
    } else if (password !== confirmPassword) {
      return toast.error("As senhas não coincidem!");
    } else if (!password.match(passwordRegex)) {
      toast.error(
        `A senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial`
      );
      return false;
    }else{
      return true;
    }
  }
  return (
    <div className="ResetPassword">
      <div className="ResetPassword__container">
        <div className="ResetPassword__logo-container">
          <Image
            src="/assets/logo-wr.png"
            alt="Logo"
            fill
            objectFit="contain"
          />
        </div>
        <h1>Adicione nova senhas</h1>

        <div className="ResetPassword__form">
          <div className="ResetPassword__form-group">
            <label htmlFor="password">Nova senha</label>
            <input
              type={viewPasswords ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {viewPasswords ? (
              <AiFillEyeInvisible onClick={() => handleViewPasswords()} />
            ) : (
              <AiFillEye onClick={() => handleViewPasswords()} />
            )}
          </div>
          <div className="ResetPassword__form-group">
            <label htmlFor="password">Nova senha</label>
            <input
              type={viewPasswords ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {viewPasswords ? (
              <AiFillEyeInvisible onClick={() => handleViewPasswords()} />
            ) : (
              <AiFillEye onClick={() => handleViewPasswords()} />
            )}
          </div>
        </div>
      <button onClick={handleChangePassword}>{loading ? "Carregando..." : "Adicionar nova senha"}</button>
      </div>
    </div>
  );
};

export default ResetPassword;
