import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";

const EventSwiper = ({ category }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative">
      <Link to={`/events/${category?.subCategory}`}>
        <button className="flex items-center category__title__container group cursor-pointer">
          <span className="capitalize text-2xl font-semibold category_title">
            {category?.subCategory}
          </span>
          <div className="icon__right__arrow relative flex items-center">
            <span className="ml-2 hidden group-hover:block">explore</span>
            <MdKeyboardArrowRight className="text-2xl" />
          </div>
        </button>
      </Link>
      <div className="h-4 lg:bg-black md:bg-green-500 sm:bg-red-600 bg-amber-500"></div>

      {/* Navigation Buttons */}
      {!isBeginning && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <FaArrowLeft />
        </button>
      )}
      {!isEnd && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          onClick={() => swiperInstance?.slideNext()}
        >
          <FaArrowRight />
        </button>
      )}

      <Swiper
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
          1536: { slidesPerView: 7 },
        }}
        spaceBetween={15}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {category.data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={item.thumbnail}
                alt=""
                className="rounded-lg w-full h-48 object-cover"
              />
              <div className="p-2">
                <p className="text-lg">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSwiper;
