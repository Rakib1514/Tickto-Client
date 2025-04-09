import React, { useState, useEffect } from 'react';
// import b1 from '../../Assets/Banner/img1.jpeg';

import b1 from '../../Assets/Banner/plane1.jpeg';
// import b2 from '../../Assets/Banner/img2.jpeg';
// import b2 from '../../Assets/Banner/train.jpeg';
import b2 from '../../Assets/Banner/Train-2.jpeg';
// import b3 from '../../Assets/Banner/img3.jpg';
// import b3 from '../../Assets/Banner/bus.jpeg';
import b3 from '../../Assets/Banner/bus-2.jpeg';
import b4 from '../../Assets/Banner/img4.jpeg';
import '../../carousel.css';

const images = [b1, b2, b3, b4,];
const content = [
  {
    site_name: 'TICKTO',
    title: 'BEST SERVICES FOR',
    topic: 'FLIGHT',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
  },
  {
    site_name: 'TICKTO',
    title: 'BEST SERVICES FOR',
    topic: 'TRAIN',
    // description: 'Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque...'
  },
  {
    site_name: 'TICKTO',
    title: 'BEST SERVICES FOR',
    topic: 'BUS',
    // description: 'Eaque optio ratione aliquid assumenda facere ab et quasi ducimus...'
  },
  {
    site_name: 'TICKTO',
    title: 'BEST SERVICES FOR',
    topic: 'THEATER',
    // description: 'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde...'
  },
  // {
  //   site_name: 'TICKTO',
  //   title: 'DESIGN SLIDER',
  //   topic: 'PLANE',
  //   // description: 'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde...'
  // },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [background, setBackground] = useState(images[0]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      setBackground(images[newIndex]);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      setBackground(images[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 4000);
    return () => clearInterval(autoSlide);
  }, []);

  return (

    <div
      className="carousel"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="list">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
              <img src={img} alt={content[index].title} />
              {index === currentIndex && (
                <div className="content">
                  <div className="site_name text-[#317371]">{content[index].site_name}</div>
                  <div className="title">{content[index].title}</div>
                  <div className="topic">{content[index].topic} <span className='text-white'>TICKETS</span></div>
                  <div className="des">{content[index].description}</div>
                  <div className="buttons my-4 flex gap-1 lg:gap-2">
                    <button className='btn text-white shadow-none font-bold bg-[#317371] border-none'>SEE MORE</button>
                    <button className='btn shadow-none font-bold border-2 border-[#317371] bg-transparent text-[#317371] '>SUBSCRIBE</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="thumbnail">
        {images.map((img, index) => (
          <div
            className={`item ${background === img ? 'active' : ''}`}
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setBackground(img);
            }}
          >
            <img src={img} alt={content[index].title} />
            <div className="content">
              <div className="title">{content[index].title}</div>
              <div className="description">{content[index].topic}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>

      <div
        className="time"
        style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
      ></div>
    </div>

  );
};

export default Banner;
