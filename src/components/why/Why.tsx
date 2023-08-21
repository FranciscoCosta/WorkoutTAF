"use client"

import React, { useState } from "react";
import "./Why.scss";
import Image from "next/image";

const cardsInfo = [
  {
    icon: "/assets/balance.png",
    title: "Consultoria Personalizada",
    text: "Acompanhamento de um profissional de educação física, que irá te orientar e acompanhar durante todo o processo de treinamento, com foco em resultados.",
  },
  {
    icon: "/assets/core.png",
    title: "Treinos Personalizados",
    text: "Treinos personalizados de acordo com seu objetivo, seja ele emagrecimento, hipertrofia, condicionamento físico, entre outros.",
  },
  {
    icon: "/assets/dumbel.png",
    title: "Acompanhamento Online",
    text: "Acompanhamento online, com feedbacks semanais, para que você possa ter um melhor aproveitamento dos treinos e alcançar seus objetivos.",
  }
]

const Why = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="Why">
      <div className="Why__container">
        <div className="Why__title">
          <h1>
            Porque <span>WORKOUT<span>TAF</span></span>
          </h1>
        </div>
        <div className="Why__content">
          {cardsInfo.map((card, index) => (
            <div
              className={`Why__content__item ${index === activeItem ? "active" : ""}`}
              key={card.title}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="Why__content__item__icon">
                <Image
                  src={card.icon}
                  alt="card icon"
                  width={150}
                  height={150}
                />
              </div>
              <div className="Why__content__item__title">
                <h2>{card.title}</h2>
              </div>
              <div className="Why__content__item__text">
                <p>{card.text}</p>
              </div>
              <div className="Why__content__item__button">
                <button
                onClick={window.open("https://www.mfitpersonal.com.br/index?acao=page&tipo=1&page=18828&isCheckout=false", "_blank")}
                >Ver mais ↗</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
