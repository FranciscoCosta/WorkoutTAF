"use client"

import React, {useState, useEffect} from 'react'
import './GeneralInfo.scss'
import axios from 'axios';


const GeneralInfo = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
  });

useEffect(() => {
  getMe()
},[])


const getMe = async()=> {

  const res = await axios.get("/api/users/me");
  console.log(res.data)
  setUser(res.data.data)
  setIsLoading(false)

 }
  return (
    <div className='GeneralInfo'>
      <div className='GeneralInfo__container'>
        <div className='GeneralInfo__container__title'>
          <h1>Informação Geral</h1>
      </div>
      <div className='GeneralInfo__container__content'>
        {
          isLoading ? <h1>Carrengando...</h1> :
          <div className='GeneralInfo__container__content__info'>
            <h3>
              <span>Usuário:</span> {user.firstName} {user.lastName}
            </h3>
            <h3>
              <span>Email:</span> {user.email}
            </h3>
            </div>
        }
        </div>
      </div>

    </div>
  )
}

export default GeneralInfo