import { useQuery } from "@tanstack/react-query";
import "./styleAllEvents.css";
import axios from "axios";

const AllEvents = () => {

  // Fetch all categories
  const { data, isLoading: categoriesIsLoading, error: categoriesError } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data.data;  
    },
  });
  
  // Fetch all events
  const { data: events, isLoading: eventsIsLoading, error: eventsError } = useQuery({
    queryKey: "events",
    queryFn: async () => {
      const response = await axios.get("/api/events");
      return response.data.data;  
    },
  });

  console.log(events)

  if (categoriesIsLoading || eventsIsLoading) return <h1>Loading...</h1>;
  if (categoriesError) return <h1>Error fetching categories</h1>; 
  if (eventsError) return <h1>Error fetching events</h1>;

  return (
    <div className="container mx-auto px-2 relative">
      {/* categories under navbar. */}
      <div className="flex gap-4 w-full sticky top-16 z-10 bg-base-100 backdrop-blur-2xl opacity-80">
        {data?.map((category, idx) => (
          <button key={idx} className="top__category__btn">{category.subCategory}</button>
        ))}
      </div>

      {/* Events */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {events?.map((event, idx) => (
          <div key={idx} className="event__card">
            <img src={event.thumbnail} alt="event" className="event__card__img" />
            <h1 className="event__card__title">{event.title}</h1>
            <p className="event__card__date">{event.date}</p>
            <p className="event__card__description">{event.description}</p>
            <button className="event__card__btn">Register</button>
          </div>
        ))}
        </div>
      
    </div>
  );
};

export default AllEvents;
