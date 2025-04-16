import { Link, Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import loadingAnimation from '../Assets/lotties/loading_ani.json'

const MainLayout = () => {
  // Fetch all categories
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axios.get('https://tickto-server.vercel.app/api/categories');
      return response.data.data || [];
    },
  });

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center text-3xl bg-black">
        <div className='w-96'>

        <Lottie animationData={loadingAnimation} ></Lottie>
        </div>
      </div>
    );

  if (error) return <h1>Error fetching categories</h1>;

  return (
    <div className=''>
      <Navbar />


      {/* Categories under navbar */}
      <div className="sticky top-16 py-[6px] font-semibold text-white z-[500]  bg-black/20 backdrop-blur-sm flex-wrap">

        <div className="container mx-auto flex flex-wrap gap-3 md:gap-5 w-full">
          {data?.map((category, idx) => (
            <Link to={`/events/${category.subCategory}`}>
              <button key={idx} className="top__category__btn underline underline-offset-1 underline-gray-400">
                {category.subCategory}
              </button>
            </Link>
          ))}
        </div>
      </div>


      <main className='-mt-9'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
