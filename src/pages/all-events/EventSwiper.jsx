import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";
import EventSwiperSlide from "./SwiperSlide";

const EventSwiper = ({ category }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative my-10">
      <Link to={`/events/${category?.subCategory}`}>
        <button className="flex items-center category__title__container group cursor-pointer">
          <span className="capitalize text-3xl font-bold mb-4 category_title">
            {category?.subCategory}
          </span>
          <div className="icon__right__arrow relative flex mb-6 items-center">
            <span className="ml-2 hidden group-hover:block">explore</span>
            <MdKeyboardArrowRight className="text-2xl" />
          </div>
        </button>
      </Link>

      {/* Navigation Buttons */}
      {!isBeginning && (
        <button
          className="absolute top-[72px] -left-12 border border-gray-600 translate-y-20 text-gray-600 p-3 bg-white/30 rounded-full z-10"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <FaArrowLeft />
        </button>
      )}
      {!isEnd && (
        <button
          className="absolute top-[72px] -right-12 border border-gray-600 translate-y-20 bg-white/30 text-gray-600 p-3 rounded-full z-10"
          onClick={() => swiperInstance?.slideNext()}
        >
          <FaArrowRight />
        </button>
      )}

      <Swiper
        breakpoints={{
          320: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
          // 1024: { slidesPerView: 5 },
          // 1280: { slidesPerView: 6 },
        }}
        spaceBetween={12}
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
        style={{ height: "fit-content" }}
      >
        {category.data?.map((item, index) => (
          <SwiperSlide key={index}>
            <EventSwiperSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSwiper;
