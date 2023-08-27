"use client"
import React, { useState } from 'react';
import './BodyMeasurements.scss';

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
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
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
            <label>
              Peito:
              <input
                type='text'
                name='chest'
                value={measurements.chest}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Bíceps Esquerdo:
              <input
                type='text'
                name='leftBiceps'
                value={measurements.leftBiceps}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Bíceps Direito:
              <input
                type='text'
                name='rightBiceps'
                value={measurements.rightBiceps}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Cintura:
              <input
                type='text'
                name='waist'
                value={measurements.waist}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Quadril:
              <input
                type='text'
                name='hip'
                value={measurements.hip}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Coxa Esquerda:
              <input
                type='text'
                name='leftThigh'
                value={measurements.leftThigh}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Coxa Direita:
              <input
                type='text'
                name='rightThigh'
                value={measurements.rightThigh}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Panturrilha Esquerda:
              <input
                type='text'
                name='leftCalf'
                value={measurements.leftCalf}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Panturrilha Direita:
              <input
                type='text'
                name='rightCalf'
                value={measurements.rightCalf}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Peso:
              <input
                type='text'
                name='weight'
                value={measurements.weight}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Altura:
              <input
                type='text'
                name='height'
                value={measurements.height}
                onChange={handleInputChange}
              />
            </label>
            <button type='submit'>Salvar Medições</button>
          </form>
          <div className='BodyMeasurements__container__content__image'>
            a
            </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurements;
