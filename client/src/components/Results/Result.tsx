// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import './Result.scss';
import carouselItems from '../../data/Results';
import Testimonial from '../Testimonials/Testimonial';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Result() {
  return (
    <div className="Result">
      <div className="Result__container">
        <h1>Resultados</h1>
        <div className="Result__container__results">
          <Carousel
            showDots
            responsive={responsive}
            className="Carrousel"
          >
            {carouselItems.map((carouselItem) => (
              <div className="Result__container__card" key={carouselItem.name}>
                <img src={carouselItem.img} alt={carouselItem.name} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Testimonial />
    </div>
  );
}

export default Result;
