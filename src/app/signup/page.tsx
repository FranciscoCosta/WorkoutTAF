/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import "./Signup.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");
  const [viewPasswords, setviewPasswords] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(true);

  useEffect(() => {
    verifyForm();
  }, [user]);


  const verifyForm = () => {
    if (user.firstName.length > 0 && user.lastName.length > 0 && user.email.length > 0 && user.password.length > 0 && user.confirmPassword.length > 0) {
      setbuttonDisable(false);
    } else {
      setbuttonDisable(true);
    }
  }

  const verifyValues = () => {
    if (user.password !== user.confirmPassword) {
      setError("As senhas não coincidem");
      return false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!user.password.match(passwordRegex)) {
      setError(`A senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial`);
      return false;
    }
    if (user.password.length < 6) {
      setError("A senha deve conter no mínimo 6 caracteres");
      return false;
    }
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!user.email.match(regexEmail)) {
      setError("Email inválido");
      return false;
    }
    if (user.firstName.length < 3) {
      setError("O nome deve conter no mínimo 3 caracteres");
      return false;
    }
    return true;
  }







  const onSignUp = async (e: any) => {
    const verified = verifyValues();
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewPasswords = () => {
    setviewPasswords(!viewPasswords);
  };

  return (
    <div className="Signup">
      <div className="Signup__container">
        <div className="Signup__image">
          <div className="Signup__display">
            <Image
              src="/assets/bg-signup.jpg"
              alt="fitness model"
              fill
              className="Signup__image-bg"
            />
          </div>
          <div className="Singup__image-info">
            <h1>
              WORKOUT<span>TAF</span>
            </h1>
            <p>
              Pronto para se superar?
              <br /> Cadastre-se agora!
            </p>
          </div>
        </div>
        <div className="Signup__container-form">
          <h1 className="Signup__title">Cadastrar</h1>
          <form action="">
            <div className="Signup__form-group">
              <label htmlFor="firstName">Nome</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Nome"
                value={user.firstName}
                onChange={(e) =>
                  setuser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div className="Signup__form-group">
              <label htmlFor="lastName">Sobrenome</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Sobrenome"
                value={user.lastName}
                onChange={(e) => setuser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className="Signup__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="Signup__form-group">
              <label htmlFor="password">Senha</label>
              <input
                type={viewPasswords ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Senha"
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })}
              />
              {viewPasswords ? (
                <AiFillEyeInvisible onClick={() => handleViewPasswords()} />
              ) : (
                <AiFillEye onClick={() => handleViewPasswords()} />
              )}
            </div>
            <div className="Signup__form-group">
              <label htmlFor="confirmpassword">Confirmar Senha</label>
              <input
                type={viewPasswords ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirmar Senha"
                value={user.confirmPassword}
                onChange={(e) =>
                  setuser({ ...user, confirmPassword: e.target.value })
                }
              />
              {viewPasswords ? (
                <AiFillEyeInvisible onClick={() => handleViewPasswords()} />
              ) : (
                <AiFillEye onClick={() => handleViewPasswords()} />
              )}
            </div>

            <div className="Signup__redirect-login">
              <p>Já tem uma conta?</p>
              <Link href="/login"> Cliquei aqui.</Link>
            </div>
            <button
              type="button"
              disabled={buttonDisable}
              onClick={(e) => onSignUp(e)}
              className={buttonDisable ? "Signup__button-disable" : "Signup__btn"}
            >
              Cadastrar
            </button>
            <div
              className="Signup__google"
              onClick={(e) => console.log("google")}
            >
              <FcGoogle />
              <button className="Google-btn">Entrar com o Google</button>
            </div>
            {error && 
            <div className="Signup__error">
              <p>{error}</p>
            </div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
