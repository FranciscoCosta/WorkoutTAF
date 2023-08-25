"use client";

import React from "react";

import "./Testimonials.scss";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
import { useState } from "react";

const TestimonialsData = [
  {
    id: 1,
    name: "Francisco Costa",
    title: "cliente",
    img: "/assets/FranciscoCosta.png",
    menssage:
      '"As mudanças na minha rotina diária e no meu físico são evidentes, e isso é tudo graças às suas instruções incríveis. Grato!"',
    data: "05/05/2023",
  },
  {
    id: 2,
    name: "Giselle Elias",
    title: "cliente",
    img: "/assets/FranciscoCosta.png",
    menssage:
      '"Sinto-me renovado e mais saudável graças às suas aulas que revolucionaram minha rotina e físico. Obrigado de coração!"',
    data: "19/04/2023",
  },
  {
    id: 3,
    name: "Jean Max",
    title: "cliente",
    img: "/assets/FranciscoCosta.png",
    menssage:
      '"Suas aulas realmente transformaram minha rotina e meu físico. Muito obrigado!"',
    data: "07/03/2023",
  },
  {
    id: 4,
    name: "Luisa Silva",
    title: "cliente",
    img: "/assets/FranciscoCosta.png",
    menssage:
      '"Estou tão feliz por ter encontrado suas aulas. Elas realmente tiveram um impacto profundo na minha rotina e no meu físico."',
    data: "05/05/2023",
  },
];

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="Testimonials__container">
        <div className="Testimonials__title">
          <h1>Depoimentos</h1>
        </div>
        <div className="Testimonials__content">
          <div className="Testimonials__content-container">
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              deviceType="desktop"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              showDots={true}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {TestimonialsData.map((item) => {
                return (
                  <div className="Testimonials__content-item" key={item.id}>
                    <div className="Testimonials__content-item-text">
                      <p>{item.menssage}</p>
                    </div>
                    <div className="Testimonials__content-user">
                      <div className="Testimonials__content-item-img">
                        <Image src={item.img} alt={item.name} fill />
                      </div>
                      <div className="Testimonials__content-item-name">
                        <h4>{item.name}</h4>
                        <p>{item.data}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
