import React, { useState, useEffect } from 'react';
import b1 from '../../Assets/Banner/img1.jpg';
import b2 from '../../Assets/Banner/img2.jpg';
import b3 from '../../Assets/Banner/img3.jpg';
import b4 from '../../Assets/Banner/img4.jpg';
import '../../carousel.css';

const images = [b1, b2, b3, b4];
const content = [
    {
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'ANIMAL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    },
    {
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'NATURE',
        description: 'Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque...'
    },
    {
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'WILDLIFE',
        description: 'Eaque optio ratione aliquid assumenda facere ab et quasi ducimus...'
    },
    {
        author: 'LUNDEV',
        title: 'DESIGN SLIDER',
        topic: 'OCEAN',
        description: 'Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde...'
    }
];

const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
    const [background, setBackground] = useState(images[0]);

    // Fixed nextSlide function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % images.length;
            setBackground(images[newIndex]); // Sync background with slider
            return newIndex;
        });
    };

    // Fixed prevSlide function
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + images.length) % images.length;
            setBackground(images[newIndex]); // Sync background with slider
            return newIndex;
        });
    };

    useEffect(() => {
        const autoSlide = setInterval(nextSlide, 7000);
        return () => clearInterval(autoSlide);
    }, []);

  return (
    <div>
      <div className="carousel" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="list">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div className={`item ${index === currentIndex ? "active" : ""}`} key={index}>
                        <img src={img} alt={content[index].title} />
                        {index === currentIndex && ( // Only render content for the active slide
                            <div className="content">
                                <div className="author">{content[index].author}</div>
                                <div className="title">{content[index].title}</div>
                                <div className="topic">{content[index].topic}</div>
                                <div className="des">{content[index].description}</div>
                                <div className="buttons">
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
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

            <div className="time" style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}></div>
        </div>
    </div>
  );
};

export default Banner;