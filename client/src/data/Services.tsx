import React from 'react';
import { IoIosFitness } from 'react-icons/io';
import { MdLocalPolice } from 'react-icons/md';

const sevices = [
  {
    title: 'Emagrecimento Workout',
    image: <IoIosFitness />,
    marketPrice: 'R$880,00',
    price: 'R$249,90',
    bulletPoints: [
      'Consulta com nutricionista esportivo',
      'Anamnese física com personal trainer',
      'Programa de treinos personalizados em aplicativo ',
      'Consultoria e acompanhamento diário com Profissionais',
    ],
  },
  {
    title: 'Treino para prova  TAF',
    image: <MdLocalPolice />,
    marketPrice: 'R$400,00',
    price: 'R$219,90',
    bulletPoints: [
      'Testes físicos de força e resistência na corrida.',
      'APP para aferir medidas, valores de IMC.',
      'Consulta com personal trainer para avaliar condição física',
      'Consulta com nutricionista esportivo.',
    ],
  },
];

export default sevices;
