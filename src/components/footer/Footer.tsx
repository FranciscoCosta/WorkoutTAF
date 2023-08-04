"use client"

import React from "react";
import "./Footer.scss";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import bg from '../../../public/assets/SpacerBlack-White.svg'
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
            <div
        className="spacer"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />
      <div className="Footer__container">
        <div className="Footer__container__left">
          <div className="Footer__title">
            <h1>
              {" "}
              <span>Workout</span>TAF
            </h1>
          </div>
          <p>
            Alcance o melhor de si mesmo, descubra o poder transformador de um
            corpo e mente em sintonia.
          </p>
          <div className="Footer__description-social">
            <div
              className="social__container"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/francisco-costa-dev/",
                  "_blank"
                )
              }
            >
              <AiFillInstagram className="svg-social" />
            </div>
            <div
              className="social__container"
              onClick={() =>
                window.open("https://github.com/FranciscoCosta/", "_blank")
              }
            >
              <FaTelegram className="svg-social" />
            </div>
            <div
              className="social__container"
              onClick={() =>
                window.open(
                  "https://franciscostaportfolio.netlify.app/",
                  "_blank"
                )
              }
            >
              <FaWhatsapp className="svg-social" />
            </div>
          </div>
        </div>
        <div className="Footer__container__center">
          <div className="Footer__title">
            <h1>Sobre nós</h1>
          </div>
          <div className="Footer__links">
            <Link href={"/"}>Sobre nós</Link>
            <Link href={"/"}>Como funciona</Link>
            <Link href={"/"}>Preços</Link>
          </div>
        </div>
        <div className="Footer__container__right">
          <div className="Footer__title">
            <h1>Suporte</h1>
          </div>
          <div className="Footer__links">
            <Link href={"/"}>Contacto</Link>
            <Link
              href={"https://www.instagram.com/workout.taf/"}
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href={"https://www.instagram.com/workout.taf/"}
              target="_blank"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
