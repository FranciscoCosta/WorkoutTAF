'use client'

import React, {useState, useEffect} from 'react'
import './EvolutionReport.scss'
import axios from 'axios'
import moment from 'moment';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

const EvolutionReport = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [measures, setMeasures] = useState([]);

  const [dateMeasures, setDateMeasures] = useState([]);
  const [weightMeasures, setWeightMeasures] = useState([]);
  const [heightMeasures, setHeightMeasures] = useState([]);
  const [chestMeasures, setChestMeasures] = useState([]);
  const [waistMeasures, setWaistMeasures] = useState([]);
  const [hipMeasures, setHipMeasures] = useState([]);
  const [leftBicepMeasures, setLeftBicepMeasures] = useState([]);
  const [rightBicepMeasures, setRightBicepMeasures] = useState([]);
  const [leftThighMeasures, setLeftThighMeasures] = useState([]);
  const [rightThighMeasures, setRightThighMeasures] = useState([]);
  const [leftCalfMeasures, setLeftCalfMeasures] = useState([]);
  const [rightCalfMeasures, setRightCalfMeasures] = useState([]);


const weightData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Peso (kg)",
      data: weightMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
  ]
};

const heightData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Altura (cm)",
      data: heightMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
  ]
};

const chestData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Peito (cm)",
      data: chestMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
  ]
};

const waistData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Cintura (cm)",
      data: waistMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
  ]
};

const bicepsData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Bicep Esquerdo (cm)",
      data: leftBicepMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
    {
      label: "Bicep Direito (cm)",
      data: rightBicepMeasures,
      fill: true,
      backgroundColor: "rgba(108,64,196,0.2)",
      borderColor: "rgb(108,64,196)",
    },
  ]
};

const thighData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Coxa Esquerda (cm)",
      data: leftThighMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
    {
      label: "Coxa Direita (cm)",
      data: rightThighMeasures,
      fill: true,
      backgroundColor: "rgba(108,64,196,0.2)",
      borderColor: "rgb(108,64,196)",
    },
  ]
};

const calfData = {
  labels: dateMeasures,
  datasets: [
    {
      label: "Panturrilha Esquerda (cm)",
      data: leftCalfMeasures,
      fill: true,
      backgroundColor: "rgba(255,1,0,0.2)",
      borderColor: "rgba(255,1,0,1)"
    },
    {
      label: "Panturrilha Direita (cm)",
      data: rightCalfMeasures,
      fill: true,
      backgroundColor: "rgba(108,64,196,0.2)",
      borderColor: "rgb(108,64,196)",
    },
  ]
};


useEffect(() => {
  getWorkout()
},[])

const getWorkout = async()=> {

  const res = await axios.get("/api/users/me");
  setUserId(res.data.data._id)
  const getWorkout = await axios.get(`/api/workouts/getworkout`);
  setIsLoading(false)

  const sortedMeasurements = getWorkout.data[0].measurements.sort((a: any, b: any) => {
    const dateA : any = new Date(a.date);
    const dateB : any= new Date(b.date);
    return dateA - dateB;
  });


  
  setMeasures(sortedMeasurements)

  const dateData = await sortedMeasurements.map((measure : any) => {
    return moment(measure.date).format('DD-MM-YYYY');
  })

  const weightData = await sortedMeasurements.map((measure : any) => {
    return measure.weight
  })

  const heightData = await sortedMeasurements.map((measure : any) => {
    return measure.height
  })

  const chestData = await sortedMeasurements.map((measure : any) => {
    return measure.chest
  })

  const waistData = await sortedMeasurements.map((measure : any) => {
    return measure.waist
  })

  const hipData = await sortedMeasurements.map((measure : any) => {
    return measure.hip
  })

  const leftBicepData = await sortedMeasurements.map((measure : any) => {
    return measure.leftBiceps
  })

  const rightBicepData = await sortedMeasurements.map((measure : any) => {
    return measure.rightBiceps
  })

  const leftThighData = await sortedMeasurements.map((measure : any) => {
    return measure.leftThigh
  })

  const rightThighData = await sortedMeasurements.map((measure : any) => {
    return measure.rightThigh
  })

  const leftCalfData = await sortedMeasurements.map((measure : any) => {
    return measure.leftCalf
  })

  const rightCalfData = await sortedMeasurements.map((measure : any) => {
    return measure.rightCalf
  })

  setLeftCalfMeasures(leftCalfData)
  setRightCalfMeasures(rightCalfData)
  setLeftThighMeasures(leftThighData)
  setRightThighMeasures(rightThighData)
  setLeftBicepMeasures(leftBicepData)
  setRightBicepMeasures(rightBicepData)
  setHipMeasures(hipData)
  setWaistMeasures(waistData)
  setChestMeasures(chestData)
  setHeightMeasures(heightData)
  setWeightMeasures(weightData)
  setDateMeasures(dateData);
}


  return (
    <div className='EvolutionReport'>
      <div className='EvolutionReport__container'>
        <div className='EvolutionReport__container__title'>
          <h1>Relatório de Evolução</h1>
      </div>
      <div className='EvolutionReport__container__content'>
      {
  isLoading ? (
    <p>Carregando...</p>
  ) : dateMeasures.length === 0 ? (
    <p>Não há medidas para mostrar</p>
  ) : (
    <div className='EvolutionReport__container__content__graphics'>
      <Line data={weightData} className='graphic__line'/>
      <Line data={heightData} className='graphic__line'/>
      <Line data={chestData} className='graphic__line'/>
      <Line data={waistData} className='graphic__line'/>
      <Line data={bicepsData} className='graphic__line'/>
      <Line data={thighData} className='graphic__line'/>
      <Line data={calfData} className='graphic__line'/>
    </div>
  )
}
        </div>
      </div>

    </div>
  )
}

export default EvolutionReport