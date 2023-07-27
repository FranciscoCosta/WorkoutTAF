"use client";

import "./Login.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import React, { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [viewPasswords, setviewPasswords] = useState(false);

  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewPasswords = () => {
    console.log(viewPasswords);
    setviewPasswords(!viewPasswords);
  };

  return (
    <div className="Login">
      <div className="Login__container">
        <div className="Login__image">
          <div className="Login__display">
            <Image
              src="/assets/bg-login1.png"
              alt="fitness model"
              fill
              className="Login__image-bg"
            />
          </div>
          <div className="Singup__image-info">
            <h1>
              WORKOUT<span>TAF</span>
            </h1>
            <p>
            De volta aos treinos? 
              <br /> Faça o login e continue sua evolução!
            </p>
          </div>
        </div>
        <div className="Login__container-form">
          <h1 className="Login__title">Entrar</h1>
          <form action="">
            <div className="Login__form-group">
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
            <div className="Login__form-group">
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

            <div className="Login__redirect-login">
              <p>Ainda não tem uma conta?</p>
              <Link href="/signup"> Cliquei aqui.</Link>
            </div>
            <button
              type="button"
              onClick={(e) => onLogin(e)}
              className="Login__btn"
            >
              Entrar
            </button>
            <div
              className="Login__google"
              onClick={(e) => console.log("google")}
            >
              <FcGoogle />
              <button className="Google-btn">Entrar com o Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
