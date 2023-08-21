import React from "react";
import "./About.scss";

import Image from "next/image";

const About = () => {
  return (
    <div className="About">
      <div className="About__container">
        <div className="About__title">
          <h1>
            Sobre{" "}
            <span>
              WORKOUT<span>TAF</span>
            </span>
          </h1>
        </div>
        <div className="About__content">
          <div className="About__content__image">
            <Image
              src="/assets/about1.png"
              alt="about"
              fill
              objectFit="cover"
            />
          </div>
          <div className="About__content__info">
            <div className="About__content__text">
              <p>
                O Workout TAF é um acompanhamento de treinamento físico, para
                pessoas que querem ter um acompanhamento profissional e treinar
                com segurança e eficiência.
              </p>
            </div>
            <div className="About__content__age">
              <button>5 Anos</button>
            </div>
          </div>
        </div>
        <div className="About__extras">
          <div className="About__extras__images">
            <div className="About__extras__images__item__border">
              <div className="About__extras__images__item">
                <Image
                  src="/assets/us1.png"
                  alt="about"
                  fill
                  objectFit="cover"
                />

                </div>
              </div>
              <div className="About__extras__images__item__border">
              <div className="About__extras__images__item">
                <Image
                  src="/assets/us2.png"
                  alt="about"
                  fill
                  objectFit="cover"
                />

                </div>
              </div>
          </div>
          <div className="About__extras__text">
            <div className="About__extras__text-item">
              <h2>
               Equipe
              </h2>
              <p>
                A equipe do Workout TAF é formada por profissionais de
                educação física, que estão sempre em busca de novos
                conhecimentos e atualizações, para oferecer o melhor serviço.
              </p>
            </div>
            <div className="About__extras__text-item">
              <h2>
                Conhecimento
              </h2>
              <p>
                Conhecimento é a base de tudo, por isso, a equipe do Workout
                TAF está sempre em busca de novos conhecimentos e atualizações,
                para oferecer o melhor serviço.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
