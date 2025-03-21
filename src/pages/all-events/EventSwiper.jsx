import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const EventSwiper = ({ category }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative">
      <p className="capitalize text-2xl font-semibold flex items-center gap-4">
        <span>{category?.subCategory}</span> <FaArrowRight />
      </p>

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
        slidesPerView={4}
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
