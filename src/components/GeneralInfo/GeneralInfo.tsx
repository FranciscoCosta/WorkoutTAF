"use client"

import React, {useState, useEffect} from 'react'
import './GeneralInfo.scss'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const GeneralInfo = () => {

  const router = useRouter();
  const [viewPasswords, setviewPasswords] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    _id: '',
  });

useEffect(() => {
  getMe()
},[])

const handleViewPasswords = () => {
  setviewPasswords(!viewPasswords);
};


const getMe = async()=> {

  const res = await axios.get("/api/users/me");
  setUser(res.data.data)
  setIsLoading(false)
  await axios.get(`/api/workouts/getworkout`);
 }

 const handleChangePassword = async (e) => {
  e.preventDefault();
  const passwordVerified = verifyPassword();
  if (!passwordVerified) return toast.error("Algo de errado aconteceu, tente novamente mais tarde!")
    try{
      const response = await axios.put("/api/users/updatepassword", {
        password: password,
        confirmPassword,
        userId: user._id,
        
      });
        toast.success(response.data.message || "Password alterada com sucesso!");
        setTimeout(() => {
          router.push("/profile");
        }, 2000);
        setPassword("");
        setConfirmPassword("");
}catch(error){
  return toast.error("Algo de errado aconteceu, tente novamente mais tarde!")
};
  }

 const verifyPassword = async () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (password.length === 0 || confirmPassword.length === 0) {
    return toast.error("Preencha todos os campos!");
  } else if (!confirmPassword.match(passwordRegex)) {
    toast.error(
      `A senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial`
    );
    return false;
  }else{
    return true;
  }
}


  return (
    <div className='GeneralInfo'>
      <div className='GeneralInfo__container'>
        <div className='GeneralInfo__container__title'>
          <h1>Informação Geral</h1>
      </div>
      <div className='GeneralInfo__container__content'>
        {
          isLoading ? <h1>Carrengando...</h1> : (

          <div className='GeneralInfo__container__content__info'>
            <div className='GeneralInfo__display'>
            <h3>
              <span>Usuário:</span> {user.firstName} {user.lastName}
            </h3>
            <h3>
              <span>Email:</span> {user.email}
            </h3>
            </div>
            <div className='GeneralInfo__ChangePassword'>
              <h3>Alterar Senha</h3>
              <form action="">
              <div className="Signup__form-group">
              <label htmlFor="password">Senha</label>
              <input
                type={viewPasswords ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {viewPasswords ? (
                <AiFillEyeInvisible onClick={() => handleViewPasswords()} />
              ) : (
                <AiFillEye onClick={() => handleViewPasswords()} />
              )}
            </div>
            <div className="Signup__form-group">
              <label htmlFor="confirmpassword">Nova Senha</label>
              <input
                type={viewPasswords ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {viewPasswords ? (
                <AiFillEyeInvisible onClick={() => handleViewPasswords()} />
              ) : (
                <AiFillEye onClick={() => handleViewPasswords()} />
              )}
            </div>
            <button type="submit"  onClick={(e) => handleChangePassword(e)}>Alterar Senha</button>
              </form>
            </div>
            </div>
        )}
        </div>
      </div>
    </div>
  
  )
}

export default GeneralInfo;