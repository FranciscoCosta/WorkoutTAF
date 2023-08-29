'use client'

import React, {useState, useEffect} from 'react'
import './PhysicalAssessment.scss'
import axios from 'axios'
import { set } from 'mongoose'

const PhysicalAssessment = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    img: '',
  });

  useEffect(() => {
    getWorkout();
  }, [])
  

  const getWorkout = async()=> {

    const res = await axios.get("/api/users/me");
    setUser(res.data.data)
    setIsLoading(false)
    const getWorkout = await axios.get(`/api/workouts/getworkout`);
  }

  return (
    <div className='PhysicalAssessment'>
      <div className='PhysicalAssessment__container'>
        <div className='PhysicalAssessment__container__title'>
          <h1>Plano de treino</h1>
      </div>
      <div className='PhysicalAssessment__container__content'>
        {
          isLoading ? <h1>Carregando...</h1> : (
            <div className='PhysicalAssessment__container__content__workout'>
              {
                user.role === 'user' ? (
                  <div className='PhysicalAssessment__container__content__workout__user'>
                      <div>
                        Plano não pago
                      </div>
                    </div>
                ) : (
                  <div>
                    Plano pago
                  </div>
                )
              }
              </div>
          )
        }
        
        </div>
      </div>

    </div>
  )
}

export default PhysicalAssessment;