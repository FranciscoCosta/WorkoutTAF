"use client";
import React, { useState } from "react";
import Image from "next/image";

import "./Results.scss";

const ResultsImages = [
  {
    id: 1,
    path: "/assets/transform1.png",
  },
  {
    id: 2,
    path: "/assets/transform2.png",
  },
  {
    id: 3,
    path: "/assets/transform3.png",
  },
  {
    id: 4,
    path: "/assets/transform2.png",
  },
  {
    id: 5,
    path: "/assets/transform2.png",
  },
  {
    id: 6,
    path: "/assets/transform2.png",
  },

];

const Results = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image: any) => {
    setSelectedImage(image.path);
  };
  return (
    <div className="Results">
      <div className="Results__container">
        <div className="Results__title">
          <h1>Nossos Resultados</h1>
        </div>
        <div className="Results__content">
          <div className="Results__content__images">
            {ResultsImages.map((image) => (
              <div className="Results__content__image-container" key={image.id}>
                <Image
                  src={image.path}
                  alt={image.path}
                  fill
                  objectFit="contain"
                  onClick={() => handleImageClick(image)}
                />
              </div>
            ))}
          </div>
          {selectedImage && (
        <div className='modal' onClick={() => setSelectedImage(null)}>
          <div className='modal-content'>
            <div className="modal-image-container">
            <Image src={selectedImage} alt='modal-img' fill objectFit="contain"/>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Results;
