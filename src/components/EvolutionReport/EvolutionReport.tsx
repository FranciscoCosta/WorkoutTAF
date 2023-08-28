'use client'


import React, {useState, useEffect} from 'react'
import './EvolutionReport.scss'
import axios from 'axios'

const EvolutionReport = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');

useEffect(() => {
  getWorkout()
},[])

const getWorkout = async()=> {

  const res = await axios.get("/api/users/me");
  setUserId(res.data.data._id)
  setIsLoading(false)
  const getWorkout = await axios.get(`/api/workouts/getworkout/${userId}`);
  console.log(getWorkout);
}


  return (
    <div className='EvolutionReport'>
      <div className='EvolutionReport__container'>
        <div className='EvolutionReport__container__title'>
          <h1>Relatório de Evolução</h1>
      </div>
      <div className='EvolutionReport__container__content'>

        </div>
      </div>

    </div>
  )
}

export default EvolutionReport