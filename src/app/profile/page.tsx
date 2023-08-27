"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const menuProfile = [
  {
    id: 1,
    title: "Informação Geral",
    icon: "/assets/carpet.png",
  },
  {
    id: 2,
    title: "Medidas Corporais",
    icon: "/assets/balance.png",
  },
  {
    id: 3,
    title: "Relatório de Evolução",
    icon: "/assets/dumbel.png",
  },
  {
    id: 4,
    title: "Avaliação Física",
    icon: "/assets/core.png",
  },
];

import "./Profile.scss";
import { BodyMeasurements, EvolutionReport, GeneralInfo, PhysicalAssessment } from "@/components";

const Profile = () => {

  const [activeMenu, setActiveMenu] = useState(1);

  let activeComponent;

  switch (activeMenu) {
    case 1:
      activeComponent = <GeneralInfo />;
      break;
    case 2:
      activeComponent = <BodyMeasurements />;
      break;
    case 3:
      activeComponent = <EvolutionReport />;
      break;
    case 4:
      activeComponent = <PhysicalAssessment />;
      break;
    default:
      activeComponent = null;
  }



  return (
    <div className="Profile">
      <div className="Profile__container">
        <div className="Profile__menu">
          {menuProfile.map((item) => (
            <div key={item.id} className={ item.id === activeMenu ? 'Profile__menu__item active' : 'Profile__menu__item'}
            onClick={() => setActiveMenu(item.id)}
            
            >
              <div className="Profile__menu__item__icon ">
                <Image src={item.icon} alt={item.title} width={70} height={70} />
              </div>
              <div className="Profile__menu__item__title"><h2>{item.title}</h2></div>
            </div>
          ))}
        </div>
        <div className="Profile__content">
          {
            activeComponent
          }

          </div>
      </div>
    </div>
  );
};

export default Profile;
