import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";
import SmallCard from "../../components/Shared/SmallCard";

const EventSwiper = ({ category }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative py-6">
      <Link to={`http://localhost:5000/events/${category?.subCategory}`}>
        <button className="category__title__container group flex cursor-pointer items-center">
          <span className="category_title mb-4 text-3xl font-bold capitalize">
            {category?.subCategory}
          </span>
          <div className="icon__right__arrow relative mb-6 flex items-center">
            <span className="ml-2 hidden group-hover:block">explore</span>
            <MdKeyboardArrowRight className="text-2xl" />
          </div>
        </button>
      </Link>

      {/* Navigation Buttons */}
      {!isBeginning && (
        <button
          className="absolute top-[72px] -left-12 z-10 translate-y-20 rounded-full border border-gray-600 bg-white/30 p-3 text-gray-600"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <FaArrowLeft />
        </button>
      )}
      {!isEnd && (
        <button
          className="absolute top-[72px] -right-12 z-10 translate-y-20 rounded-full border border-gray-600 bg-white/30 p-3 text-gray-600"
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
        style={{ height: 'fit-content' }}
      >
        {category.data?.map((item, index) => (
          <SwiperSlide key={index}>
            <SmallCard event={item} height={'h-48'} titletext={'text-xl font-semibold'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSwiper;
