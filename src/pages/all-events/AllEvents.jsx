import { useQuery } from "@tanstack/react-query";
import "./styleAllEvents.css";
import axios from "axios";
import EventSwiper from "./EventSwiper";


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

  if (categoriesIsLoading || eventsIsLoading) return <h1>Loading...</h1>;
  if (categoriesError) return <h1>Error fetching categories</h1>;
  if (eventsError) return <h1>Error fetching events</h1>;

  return (
    <div className="container mx-auto px-2 relative">
      {/* Categories under navbar */}
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
          <EventSwiper key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
