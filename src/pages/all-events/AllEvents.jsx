
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
      const response = await axios.get('/api/events');
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
    <div className="">
      {/* bg-image */}
      <div className="event-bg min-h-[470px]">
        <div className='h-[470px] w-full bg-black/45 flex items-center justify-center'>
          <div className='text-center text-white space-y-5 md:w-1/2 mx-auto'>
            <h1 className='text-4xl lg:text-6xl font-bold '>All Events at a Glance</h1>
            <p className='w-[96%] mx-auto'>Explore a diverse range of events happening across all categories — from electrifying music concerts and the latest movie premieres to unforgettable travel experiences, thrilling sports matches, engaging theater performances, and so much more — all conveniently gathered in one place for you to discover, enjoy, and book with ease.</p>
          </div>
        </div>
      </div>
      {/* Events */}
      <div className="pt-8 max-w-screen-2xl mx-auto">
        {events?.map((category, idx) => (
          <EventSwiper key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
