import { Link, Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

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
      <div className="flex min-h-screen items-center justify-center text-3xl">
        <span>Loading...</span>
      </div>
    );
  if (error) return <h1>Error fetching categories</h1>;

  return (
    <div className=''>
      <Navbar />


      {/* Categories under navbar */}
      {/* <div className="sticky top-16 py-[6px] font-semibold text-base z-10 bg-base-100 backdrop-blur-2xl opacity-80 flex-wrap">

        <div className="container mx-auto flex flex-wrap gap-3 md:gap-5 w-full">
          {data?.map((category, idx) => (
            <Link to={`/events/${category.subCategory}`}>
              <button key={idx} className="top__category__btn underline underline-offset-1 underline-gray-400">
                {category.subCategory}
              </button>
            </Link>
          ))}
        </div>
      </div> */}


      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
