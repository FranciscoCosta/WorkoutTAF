"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


import "./Signup.scss";
const Signup = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    role: "basic user",
  });
  const [error, setError] = useState("");
  const [viewPasswords, setviewPasswords] = useState(false);

  const onSignUp = async (e: any) => {
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
        <h1 className="Signup__title">Signup</h1>
        <form action="">
          <div className="Signup__form-group">
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={(e) => setuser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="Signup__form-group">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
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
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
            {viewPasswords ? (
              <AiFillEyeInvisible
                onClick={() => handleViewPasswords()} />) : (
              <AiFillEye onClick={() => handleViewPasswords()} />
            )}
          </div>
          <div className="Signup__form-group">
            <label htmlFor="password">Confirmar Senha</label>
            <input
              type={viewPasswords ? "text" : "password"}
              name="password"
              id="confirmpassword"
              value={user.password}
              onChange={(e) => setuser({ ...user, confirmPassword: e.target.value })}
            />
            {viewPasswords ? (
              <AiFillEyeInvisible
                onClick={() => handleViewPasswords()} />) : (
              <AiFillEye onClick={() => handleViewPasswords()} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
