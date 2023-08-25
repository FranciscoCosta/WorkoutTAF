"use client";

import React from "react";
import "./Hero.scss";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__container">
        <div className="Hero__title">
          <motion.h1
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Seja o seu melhor
          </motion.h1>
          <motion.p
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 1.3, delay: 0 }}
          >
            "Descubra o poder transformador de um corpo e mente em sintonia,
            conquistando seus objetivos fitness de forma única e motivadora."
          </motion.p>

          <div className="Hero__cto">
            <motion.button
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.5 }}
            onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
            >Inscreva-se</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
