import React, { useState, useEffect, useRef } from 'react';

import b1 from '../../Assets/Banner/plane1.jpeg';
// import b2 from '../../Assets/Banner/train.jpeg';
// import b2 from '../../Assets/Banner/Train-2.jpeg';
// import b2 from '../../Assets/Banner/train3.jpg';
import b2 from '../../Assets/Banner/view-train-night.jpg';
// import b3 from '../../Assets/Banner/bus.jpeg';
import b3 from '../../Assets/Banner/bus-2.jpeg';
import b4 from '../../Assets/Banner/img4.jpeg';
// import '../../carousel.css';
import './Banner.css'

const slides = [
  {
    image: b1,
    title: "Soar the Skies in Comfort",
    description:
      "Discover the thrill of air travel with our curated selection of flights to top destinations. Whether it's a spontaneous getaway or a business trip, our airline partners ensure a smooth, comfortable, and unforgettable journey from takeoff to landing.",
  },
  {
    image: b2,
    title: "Journey Through Landscapes by Train",
    description:
      "Travel in style and comfort as you glide past mountains, rivers, and towns. Our train tickets offer more than a commute — they offer a window into the soul of the countryside, perfect for slow travelers and scenic seekers.",
  },
  {
    image: b3,
    title: "Explore Cities on a Budget",
    description:
      "Hop on one of our trusted bus routes and travel affordably to your favorite cities and towns. Ideal for short trips and spontaneous adventures, our buses come equipped with modern amenities and flexible schedules to fit your lifestyle.",
  },
  {
    image: b4,
    title: "Feel the Magic of Live Theater",
    description:
      "Step into a world of drama, music, and unforgettable performances with our curated selection of theater tickets. From timeless classics to modern masterpieces, enjoy a night out that captivates your senses and stirs your imagination.",
  },
];


export default function Banner() {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const timeRef = useRef(null);
  const timeoutRef = useRef(null);
  const autoNextRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    startAutoNext();
    return () => {
      clearTimeout(autoNextRef.current);
    };
  }, []);

  const startAutoNext = () => {
    autoNextRef.current = setTimeout(() => {
      handleNext();
    }, timeAutoNext);
  };

  const handleSlider = (type) => {
    const slider = sliderRef.current;
    const thumbnails = thumbRef.current;
    const carousel = carouselRef.current;
    const thumbItems = thumbnails.querySelectorAll('.item');
    const sliderItems = slider.querySelectorAll('.item');

    if (type === 'next') {
      slider.appendChild(sliderItems[0]);
      thumbnails.appendChild(thumbItems[0]);
      carousel.classList.add('next');
    } else {
      slider.prepend(sliderItems[sliderItems.length - 1]);
      thumbnails.prepend(thumbItems[thumbItems.length - 1]);
      carousel.classList.add('prev');
    }

    clearTimeout(timeoutRef.current);
    clearTimeout(autoNextRef.current);

    timeRef.current.classList.remove('running');
    void timeRef.current.offsetWidth;
    timeRef.current.classList.add('running');

    timeoutRef.current = setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, timeRunning);

    startAutoNext();
  };

  const handleNext = () => handleSlider('next');
  const handlePrev = () => handleSlider('prev');

  return (
    <div ref={carouselRef} className="carousel bg-black relative overflow-hidden w-screen min-h-screen">
  
      <div ref={sliderRef} className="list absolute inset-0">

        {slides.map((slide, index) => (
          <div key={index} className="item absolute inset-0">
            <img src={slide.image} alt="slide" className="w-full h-full object-cover" />

            <div className="content absolute top-[20%] md:top-[26%] w-[1200px] max-w-[80%] left-[200px] md:left-[500px] lg:left-[760px] -translate-x-1/2 pr-[24%] text-white text-shadow-md">
              <div className="author font-bold tracking-[10px] text-xl"><span className='text-[#317371]'>TICK</span>TO</div>
              <div className="title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 my-3 text-yellow-400">{slide.title}</div>
              <div className="des md:text-lg leading-tight mb-8">{slide.description}</div>

              <div className="buttons flex gap-2 mt-5">
                <button className="btn shadow-none px-6 bg-[#317371] text-white border-none tracking-wider">SEE MORE</button>
                <button className="btn shadow-none px-6 border border-[#317371] text-[#317371] bg-transparent tracking-wider">SUBSCRIBE</button>
              </div>
            </div>

          </div>
        ))}

      </div>
      <div ref={thumbRef} className="thumbnail absolute bottom-[50px] left-1/2 -translate-x-1/2 flex gap-5 z-[100]">
        {slides.map((slide, index) => (
          <div key={index} className="item w-[150px] h-[220px] relative">
            <img src={slide.image} alt="thumb" className="w-full h-full object-cover rounded-[20px]" />
            <div className="content absolute bottom-2 left-2 right-2 text-white">
              <div className="title font-medium">Name Slider</div>
              <div className="description font-light">Description</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows absolute top-[80%] md:left-[16%] lg:left-[34%] w-[300px] max-w-[30%] z-[100] flex gap-2 items-center">
        <button onClick={handlePrev} >{'<'}</button>
        <button onClick={handleNext} >{'>'}</button>
      </div>
      <div ref={timeRef} className="time absolute top-0 left-0 h-[3px] bg-gray-600 z-[1000] running"></div>
    </div>
  );
}



