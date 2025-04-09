import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';

// import { Pagination, Navigation } from 'swiper/modules';
import '../../styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const [setSwiperRef] = useState(null);
  const [reviews, setReviews] = useState();

  useGSAP(() => {
    gsap.from('#reviewsection', {
      // width: '70%',
      scale: 0.03,
      borderRadius: '1900%',
      scrollTrigger: {
        start: 'top 10%',

        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    fetch('./review.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div id="reviewsection" className="mt-32 rounded-t-[3%] bg-[#317371]/50 py-20">
        <h2 className="py-3 text-center text-5xl font-bold text-white">Our Best Reviews</h2>
        <p className="mx-auto w-[96%] py-3 text-center text-white md:text-lg lg:w-[60%]">
          {' '}
          Our customers speak for us! From effortless booking to real-time seat selection and secure
          check-ins, our platform ensures a smooth experience every time. See why users trust us for
          their ticketing needs!
        </p>

        <section className="mx-auto px-4 py-7 lg:px-0">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            spaceBetween={40}
            className="mySwiper"
            breakpoints={{
              //mobile devices
              90: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              //tablets
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // desktops
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index} className="rounded-lg">
                <div className="flex flex-col p-4">
                  <div className="flex gap-1">
                    <img
                      className="h-16 w-16 rounded-full border-2 border-[#317371] p-1"
                      src={review.user_image}
                      alt=""
                    />
                    <div className="my-auto text-start">
                      <h3 className="font-semibold">{review.user_name}</h3>
                      <p>{review.user_email}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex-grow text-start">{review.testimonial}</div>

                  <div className="py-1.5 text-end"> -{review.date} </div>

                  {/* <div className="flex justify-center gap-2 mt-4">
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                                <FaStar className='text-2xl text-amber-500' />
                                            </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
