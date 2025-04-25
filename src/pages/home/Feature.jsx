import React, { useEffect, useState } from "react";
import SmallCard from "../../components/Shared/SmallCard.jsx";

const Feature = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("./event.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(5, 11)));
  }, []);

  return (
    <div>
      <div className="max-w-screen-2xl w-[96%] mx-auto my-28">
        <h1 className="text-4xl font-bold ">Featured</h1>
        <p className="py-4 pb-8 md:w-[90%] lg:w-[70%]">
          These top-rated tickets are selling fast! Whether it’s an exclusive
          conference, a must-watch movie, or the perfect travel route, we’ve got
          the best picks right here. From inspiring business summits to
          blockbuster premieres and seamless travel options, these are the
          experiences people love the most. Book now and see why they’re a
          favorite!
        </p>
        <div className=" grid md:grid-cols-3 lg:grid-cols-3 gap-3">
          {events?.map((event) => (
            <SmallCard
              className="stagger-box"
              key={event.id}
              event={event}
              height={"h-72"}
              titletext={"text-2xl font-bold"}
              space={"bottom-4 left-3"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
