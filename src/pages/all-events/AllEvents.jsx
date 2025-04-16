import { useQuery } from "@tanstack/react-query";
import loadingAnimation from '../../Assets/lotties/loading_ani_light.json'
import loadingAnimationdark from '../../Assets/lotties/loading_ani.json'
import axios from "axios";
import EventSwiper from "./EventSwiper";
import Lottie from "lottie-react";

const AllEvents = () => {
  // Fetch all events
  const {
    data: events,
    isLoading: eventsIsLoading,
    error: eventsError,
  } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await axios.get('https://tickto-server.vercel.app/api/events');
      return response.data.data || [];
    },
  });

  console.log(events);

  if (eventsIsLoading)
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl ">
        <div className='w-96'>
          <Lottie animationData={loadingAnimation} ></Lottie>
          {/* <Lottie animationData={loadingAnimationdark} ></Lottie> */}
        </div>
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
      <div className="pt-22">
        {events?.map((category, idx) => (
          <EventSwiper key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
