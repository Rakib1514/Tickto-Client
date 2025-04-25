import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import "../../styles.css";

const Reviews = () => {
  // Fix your ref state
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // only loop if you have MORE than slidesPerView (3)
  const loopEnabled = reviews.length > 3;

  return (
    <div id="reviewsection" className="py-20 rounded-t-xl my-24">
      <h2 className="text-center py-3 text-5xl font-bold ">
        Our Best Reviews
      </h2>
      <p className="py-3 md:text-lg text-center w-[96%] lg:w-[40%] mx-auto">
        Our customers speak for us! From effortless booking to real-time seat
        selection and secure check‑ins, our platform ensures a smooth
        experience every time. See why users trust us for their ticketing
        needs!
      </p>

      <section className="px-4 py-7 lg:px-0 max-w-screen-2xl mx-auto">

        <Swiper
          breakpoints={{
            90: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            
          }}
          autoplay={{
            delay: 2000
          }}
          spaceBetween={16}
          loop={true}

          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper h-80"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className=" max-sm:min-h-40">
              <div className="p-4 flex flex-col rounded-2xl bg-[#edf5ff]">
                <div className="flex gap-1 md:gap-4 border-b border-gray-200">
                  <img
                    className="rounded-full w-14 h-14 md:w-16 md:h-16 border-2 border-[#274f7a] p-1"
                    src={review.user_image}
                    alt={review.user_name}
                  />
                  <div className="text-start my-auto">
                    <h3 className="font-medium md:font-semibold">{review.user_name}</h3>
                    <p className="text-sm md:text-base">{review.user_email}</p>
                  </div>
                </div>

                <div className="mt-4 text-start text-sm md:text-base flex-grow">
                  {review.testimonial}
                </div>

                <div className="py-1.5 text-end">— {review.date}</div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </section>
    </div>
  );
};

export default Reviews;
