import React from 'react';
import './Service.scss';
import { motion } from 'framer-motion';
import services from '../../data/Services';

function Service() {
  return (
    <div className="Services">
      <div className="Services__container">
        <h1>Serviços</h1>
        <div className="Services__container__services">
          {services.map((service) => (
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              className="Services__container__card"
              key={service.title}
            >
              <h2>{service.title}</h2>
              {service.image}

              <p className="line">
                <span>Preço médio Brasil:</span>
                <br />
                <h5>{service.marketPrice}</h5>
              </p>
              <p className="green">
                <span>Nosso Preço:</span>
                <br />
                {service.price}
              </p>
              <ul>
                {service.bulletPoints.map((bulletPoint) => (
                  <li key={bulletPoint}>{bulletPoint}</li>
                ))}
              </ul>
              <button type="button">Saiba Mais</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
