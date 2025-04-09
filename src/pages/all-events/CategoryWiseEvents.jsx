import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import SmallCard from '../../components/Shared/SmallCard';

const CategoryWiseEvents = () => {
  const { category } = useParams();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['category-wise-events'],
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
      <div className="flex min-h-screen items-center justify-center text-3xl">
        <span>Loading...</span>
      </div>
    );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto mt-8 px-2">
        <h1 className="text-primary mb-4 text-3xl font-bold capitalize">{category}</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data?.map((event, idx) => (
            <SmallCard
              key={idx}
              event={event}
              height={'h-48'}
              titletext={'text-xl font-semibold'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseEvents;
