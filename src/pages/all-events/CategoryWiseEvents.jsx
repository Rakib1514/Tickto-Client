import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";

const CategoryWiseEvents = () => {
  const { category } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["category-wise-events"],
    queryFn: async () => {
      const response = await axios.get(`/api/events/${category}`);
      return response.data.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [category, refetch]);

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl">
        <span>Loading...</span>
      </div>
    );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2 mt-8">
        <h1 className="text-3xl font-bold mb-4 capitalize text-primary">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.map((event, idx) => (
            <div key={idx} className="event__card">
              <div className="event__card__img">
                <img src={event.thumbnail} alt={event.title} />
              </div>
              <div className="event__card__details">
                <h2 className="event__card__title">{event.title}</h2>
                <p className="event__card__desc">{event.description}</p>
                <p className="event__card__date">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseEvents;
