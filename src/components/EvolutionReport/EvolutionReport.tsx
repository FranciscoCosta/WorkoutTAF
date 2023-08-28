'use client'


import React, {useState, useEffect} from 'react'
import './EvolutionReport.scss'
import axios from 'axios'

const EvolutionReport = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [measures, setMeasures] = useState([]);

useEffect(() => {
  getWorkout()
},[])

const getWorkout = async()=> {

  const res = await axios.get("/api/users/me");
  setUserId(res.data.data._id)
  const getWorkout = await axios.get(`/api/workouts/getworkout`);
  console.log(getWorkout.data[0].measurements)
  setMeasures(getWorkout.data[0].measurements)
  setIsLoading(false)
}


  return (
    <div className='EvolutionReport'>
      <div className='EvolutionReport__container'>
        <div className='EvolutionReport__container__title'>
          <h1>Relatório de Evolução</h1>
      </div>
      <div className='EvolutionReport__container__content'>
    {
      isLoading ? <p>Carregando...</p> :
      <div className='EvolutionReport__container__content__graphics'>
        {
          measures.map((measure, index) => (
            <p>
              {measure.weight}
            </p>
          ))
        }
        </div>
    }
        </div>
      </div>

    </div>
  )
}

export default EvolutionReport