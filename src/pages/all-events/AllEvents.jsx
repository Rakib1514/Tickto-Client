import { useQuery } from "@tanstack/react-query";
import "./styleAllEvents.css";
import axios from "axios";
import EventSwiper from "./EventSwiper";

const AllEvents = () => {
  // Fetch all events
  const {
    data: events,
    isLoading: eventsIsLoading,
    error: eventsError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await axios.get("/api/events");
      return response.data.data || [];
    },
  });

  if (eventsIsLoading)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl">
        <span>Loading...</span>
      </div>
    );
  if (eventsError) return <h1>Error fetching events</h1>;

  return (
    <div className="container mx-auto px-2 relative">
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
