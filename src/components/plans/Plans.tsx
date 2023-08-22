"use client";
import React from "react";
import "./Plans.scss";

import { AiOutlineCheckCircle } from "react-icons/ai";
const PlansInfo = [
  {
    title: "Básico",
    price: "R$ 99,90",
    bulletPoints: [
      "1 meses de acesso",
      "Acompanhamento nutricional",
      "Acompanhamento de treino",
      "Acesso ao sistema de treino",
    ],
  },
  {
    title: "Intermediário",
    price: "R$ 149,90",
    bulletPoints: [
      "2 meses de acesso",
      "Acompanhamento nutricional",
      "Acompanhamento de treino",
      "Acesso ao sistema de treino",
    ],
  },
  {
    title: "Avançado",
    price: "R$ 199,90",
    bulletPoints: [
      "3 meses de acesso",
      "Acompanhamento nutricional",
      "Acompanhamento de treino",
      "Acesso ao sistema de treino",
    ],
  },
];

const Plans = () => {
  const handlePlans = () => {
    window.open(
      "https://www.mfitpersonal.com.br/index?acao=page&tipo=1&page=18828&isCheckout=false",
      "_blank"
    );
  };

  return (
    <div className="Plans">
      <div className="Plans__container">
        <div className="Plans__title">
          <h1>Nossos Planos</h1>
        </div>
        <div className="Plans__content">
          {PlansInfo.map((plan, index) => (
            <div className="Plans__card" key={index}>
              <div className="Plans__card-title">
                <h2>{plan.title}</h2>
              </div>
              <div className="Plans__card-price">
                <h3>
                  {plan.price} <span>/2meses</span>
                </h3>
              </div>
              <div className="Plans__card-points">
                {plan.bulletPoints.map((point, index) => (
                  <div className="Plans__card-points-item" key={index}>
                    <AiOutlineCheckCircle />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <div className="Plans__card-button">
                <button onClick={() => handlePlans}>Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
