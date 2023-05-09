import React from 'react';
import './Testimonial.scss';
import { motion } from 'framer-motion';
import Testimonials from '../../data/Testimonials';

function Testimonial() {
  return (
    <div className="Testimonial">
      <div className="Testimonial__container">
        <h1>Depoimentos</h1>
        <div className="Testimonial__container__testimonials">
          {Testimonials.map((testimonial) => (
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              className="Testimonial__container__card__content"
              key={testimonial.name}
            >
              <div className="Testimonial__container__card__left">
                <img src={testimonial.img} alt={testimonial.name} />
                <p>{testimonial.data}</p>
              </div>
              <div className="Testimonial__container__card__right">
                <p>{testimonial.desc}</p>
                <span>{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
