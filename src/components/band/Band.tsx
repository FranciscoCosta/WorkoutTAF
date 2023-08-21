import React from "react";
import "./Band.scss";
import Marquee from "react-fast-marquee";

function Band() {
  return (
    <div className="Band">
      <div className="Band__container">
        <Marquee className="marquee">
          Dicas de Treinamento *    
          Nutrição Saudável *
          Motivação e Mentalidade *
        </Marquee>
      </div>
    </div>
  );
}

export default Band;
