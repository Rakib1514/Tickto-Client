import { useQuery } from "@tanstack/react-query";
import "./styleAllEvents.css";
import axios from "axios";

// For swiper
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";

const AllEvents = () => {
  // Fetch all categories
  const {
    data,
    isLoading: categoriesIsLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data.data;
    },
  });

  // Fetch all events
  const {
    data: events,
    isLoading: eventsIsLoading,
    error: eventsError,
  } = useQuery({
    queryKey: "events",
    queryFn: async () => {
      const response = await axios.get("/api/events");
      return response.data.data;
    },
  });

  console.log(events);

  if (categoriesIsLoading || eventsIsLoading) return <h1>Loading...</h1>;
  if (categoriesError) return <h1>Error fetching categories</h1>;
  if (eventsError) return <h1>Error fetching events</h1>;

  return (
    <div className="container mx-auto px-2 relative">
      {/* categories under navbar. */}
      <div className="flex gap-4 w-full sticky top-16 z-10 bg-base-100 backdrop-blur-2xl opacity-80">
        {data?.map((category, idx) => (
          <button key={idx} className="top__category__btn">
            {category.subCategory}
          </button>
        ))}
      </div>

      {/* Events */}

      <div className="mt-8">
        {events?.map((category, idx) => (
          <div key={idx}>
            <p className="capitalize text-2xl font-semibold flex items-center gap-4">
              <span>{category?.subCategory}</span> <FaArrowRight />
            </p>
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {category.data?.map((item) => (
                <SwiperSlide>
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
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
