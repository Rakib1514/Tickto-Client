import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import SmallCard from "../../components/Shared/SmallCard";

const CategoryWiseEvents = () => {
  const { category } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["category-wise-events"],
    queryFn: async () => {
      const response = await axios.get(`/api/events/${category}`);
      return response.data.data || [];
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
        <h1 className="text-3xl font-bold mb-4 capitalize text-primary">
          {category}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.map((event, idx) => (
            <SmallCard
              key={idx}
              event={event}
              height={"h-48"}
              titletext={"text-xl font-semibold"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseEvents;
