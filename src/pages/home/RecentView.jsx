import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Correct for React
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SmallCard from '../../components/Shared/SmallCard.jsx';


const RecentView = () => {
  const [events, setEvents] = useState([]);

  // const [events, setEvents] = useState([])

  // fetch data from recently viewed collection with /:uid 
  // data limit - 4

  useEffect(() => {
    fetch('./event.json')
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 8)));
  }, []);

  return (
    <div className="mx-auto my-28 w-[96%] max-w-screen-2xl">
      <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-5">

        <h1 className="my-auto text-center text-7xl font-bold">Events Viewed <span className='text-[#78a6c4]'>Recently</span></h1>

        <div className='col-span-4'>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {events?.map((event) => (
              <SwiperSlide key={event.id} className="h-full w-full bg-gray-400 shadow-2xl">
                <SmallCard
                  event={event}
                  height={'h-72'}
                  titletext={'text-2xl font-bold'}
                  space={'bottom-4 left-3'}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </div>
  );
};

export default RecentView;
