import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import SmallCard from "../../components/Shared/SmallCard";
import { FiSearch } from 'react-icons/fi';
import loadingAnimation from '../../Assets/lotties/loading_ani.json'
import loadingAnimationdark from '../../Assets/lotties/loading_ani.json'

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
      <div className="flex min-h-screen items-center justify-center text-3xl ">
        <div className='w-96'>
        <Lottie animationData={loadingAnimation} ></Lottie>
        {/* <Lottie animationData={loadingAnimationdark} ></Lottie> */}
        </div>
      </div>
    );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2">

        <div className="md:flex justify-between items-center my-10">

          <h1 className="text-3xl mb-3 font-bold capitalize text-primary">{category}</h1>

          <div className="flex gap-3">
            {/* search */}
            <label className="input input-bordered rounded-2xl flex items-center gap-2">
              <input type="text" className="grow " placeholder="Search"
              />
              <button className=''><FiSearch /></button>
            </label>

            {/* sort dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn p-2 px-5 mb-2">Sort</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          {data?.map((event, idx) => (

            <SmallCard key={idx} event={event} height={'h-52'} titletext={'text-xl font-semibold'} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategoryWiseEvents;
