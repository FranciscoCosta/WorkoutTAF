import React from "react";
import "./Band.scss";

function Band() {
  return (
    <div className="Band">
      <div className="Band__container">
        <marquee scrollamount="10" loop="infinite">
          <p>
            Dicas de Treinamento * Nutrição Saudável * Motivação e Mentalidade *
            Monitoramento e Rastreamento
          </p>
        </marquee>
      </div>
    </div>
  );
}

export default Band;
