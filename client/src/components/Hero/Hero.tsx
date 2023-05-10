import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';
import { logo_black, circle, hero } from '../../assets/index';

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__container">
        <div className="Hero__container-logo">
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            className="Hero__logo__container"
          >
            <p>Nós somos</p>
            <img src={logo_black} alt="logo workouttaf" />
          </motion.div>
        </div>

        <div className="Hero__info__container">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.2 }}
            className="Hero__CTO"
          >
            <h1>
              Comece a sua jornada <span>hoje!</span>
            </h1>
            <button type="button">Saiba Mais</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
