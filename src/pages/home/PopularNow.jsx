import { useEffect, useState } from "react";
import SmallCard from "../../components/Shared/smallCard";

const PopularNow = () => {
 
  const [events, setEvents] = useState([])

  // 
  // fetch data from events collection with
  // desanding(wrong spelling go brrrrrrrr) order 
  // data limit - 4

  useEffect(() => {
    fetch('./event.json')
      .then(res => res.json())
      .then(data => setEvents(data.slice(0, 4)))
  }, [])


  return (
    <div className='max-w-screen-2xl w-[96%] mx-auto my-28'>
      <h1 className='text-4xl font-bold'>Popular Now</h1>
      <p className="py-6 md:w-[90%] lg:w-[70%]">Discover the hottest events that everyone is talking about! These top-selling experiences have captured the attention of thousands, selling out fast. Whether it's a thrilling concert, an electrifying sports match, or an unforgettable theater show, these events are in high demand.</p>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {
          events?.map(event => <SmallCard key={event.id} event={event} />)
        }
      </div>
    </div>
  );
};

export default PopularNow;