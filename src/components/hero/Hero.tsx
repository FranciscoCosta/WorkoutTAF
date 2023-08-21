import React from "react";
import "./Hero.scss";

const Hero = () => {
  return <div className="Hero">
    <div className="Hero__container">
        <div className="Hero__title">
            <h1>
              Seja o seu melhor
            </h1>
            <p>
            Consultorias Personalizadas , descubra o poder transformador de um corpo e mente em sintonia, conquistando seus objetivos fitness de forma única e motivadora.
            </p>

        <div className="Hero__cto">
            <button>
              Inscreva-se
            </button>
        </div>
        </div>
    </div>
  </div>;
};

export default Hero;
