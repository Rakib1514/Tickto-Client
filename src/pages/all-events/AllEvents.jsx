import { useQuery } from "@tanstack/react-query";
// import "./styleAllEvents.css";
import axios from "axios";
// import EventSwiper from "./EentSwiper";
// import { useQuery } from '@tanstack/react-query';

// import axios from 'axios';
// import EventSwiper from './EventSwiper';

const AllEvents = () => {
  // Fetch all events
  const {
    data: events,
    isLoading: eventsIsLoading,
    error: eventsError,
  } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await axios.get('/api/events');
      return response.data.data || [];
    },
  });

  console.log(events);

  if (eventsIsLoading)
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl">
        <span>Loading...</span>
      </div>
    );
  if (eventsError)
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl">
        Error fetching events
      </div>
    );

  return (
    <div className="relative container mx-auto px-2">
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
