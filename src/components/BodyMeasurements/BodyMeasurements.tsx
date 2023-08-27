"use client"
import React, { useState } from 'react';
import './BodyMeasurements.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BodyMeasurements = () => {
  const [measurements, setMeasurements] = useState({
    chest: '',
    leftBiceps: '',
    rightBiceps: '',
    waist: '',
    hip: '',
    leftThigh: '',
    rightThigh: '',
    leftCalf: '',
    rightCalf: '',
    weight: '',
    height: '',
    date: null,
  });

  const handleInputChange = (event : any) => {
    const { name, value } = event.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: value,
    }));
  };

  const handleDateChange = (date : any) => {
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      date: date,
    }));
  };

  const handleSubmit = (event :any) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os dados, como enviar para o servidor ou realizar algum processamento local
    console.log('Medições enviadas:', measurements);
    // Limpa os campos após envio (opcional)
    setMeasurements({
      chest: '',
      leftBiceps: '',
      rightBiceps: '',
      waist: '',
      hip: '',
      leftThigh: '',
      rightThigh: '',
      leftCalf: '',
      rightCalf: '',
      weight: '',
      height: '',
      date: null,
    });
  };

  return (
    <div className='BodyMeasurements'>
      <div className='BodyMeasurements__container'>
        <div className='BodyMeasurements__container__title'>
          <h1>Medidas Corporais</h1>
        </div>
        <div className='BodyMeasurements__container__content'>
        <form onSubmit={handleSubmit}>
          <div className='BodyMeasurements__upper'>
          <div className='Measurements__form-group'>
              <label htmlFor='weight'>Peso (kg)</label>
              <input
                type='text'
                name='weight'
                id='weight'
                placeholder='Peso'
                value={measurements.weight}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='height'>Altura (cm)</label>
              <input
                type='text'
                name='height'
                id='height'
                placeholder='Altura'
                value={measurements.height}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='chest'>Peito (cm)</label>
              <input
                type='text'
                name='chest'
                id='chest'
                placeholder='Peito'
                value={measurements.chest}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='leftBiceps'>Bíceps Esquerdo (cm)</label>
              <input
                type='text'
                name='leftBiceps'
                id='leftBiceps'
                placeholder='Bíceps Esquerdo'
                value={measurements.leftBiceps}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='rightBiceps'>Bíceps Direito (cm)</label>
              <input
                type='text'
                name='rightBiceps'
                id='rightBiceps'
                placeholder='Bíceps Direito'
                value={measurements.rightBiceps}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='waist'>Cintura (cm)</label>
              <input
                type='text'
                name='waist'
                id='waist'
                placeholder='Cintura'
                value={measurements.waist}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='hip'>Quadril (cm)</label>
              <input
                type='text'
                name='hip'
                id='hip'
                placeholder='Quadril'
                value={measurements.hip}
                onChange={handleInputChange}
              />
            </div>
            </div>
            <div className='BodyMeasurements__lower'>
            <div className='Measurements__form-group'>
              <label htmlFor='leftThigh'>Coxa Esquerda (cm)</label>
              <input
                type='text'
                name='leftThigh'
                id='leftThigh'
                placeholder='Coxa Esquerda'
                value={measurements.leftThigh}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='rightThigh'>Coxa Direita (cm)</label>
              <input
                type='text'
                name='rightThigh'
                id='rightThigh'
                placeholder='Coxa Direita'
                value={measurements.rightThigh}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='leftCalf'>Panturrilha Esquerda (cm)</label>
              <input
                type='text'
                name='leftCalf'
                id='leftCalf'
                placeholder='Panturrilha Esquerda'
                value={measurements.leftCalf}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='rightCalf'>Panturrilha Direita (cm)</label>
              <input
                type='text'
                name='rightCalf'
                id='rightCalf'
                placeholder='Panturrilha Direita'
                value={measurements.rightCalf}
                onChange={handleInputChange}
              />
            </div>
            <div className='Measurements__form-group'>
              <label htmlFor='date'>Data da medida</label>
              <DatePicker
                selected={measurements.date}
                onChange={handleDateChange}
                dateFormat='dd/MM/yyyy'
                name='date'
                id='date'
                placeholderText='Selecione a data'
              />
            </div>

            <button  className="Save__button" type='submit'>Salvar Medições</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurements;
