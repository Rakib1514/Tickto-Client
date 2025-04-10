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
      const response = await axios.get('/api/categories');
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
    <>
      <Navbar />
      {/* Categories under navbar */}
      <div className="bg-base-100 sticky top-16 z-10 flex-wrap opacity-80 backdrop-blur-2xl">
        <div className="container mx-auto flex w-full gap-4">
          {data?.map((category, idx) => (
            <Link to={`/events/${category.subCategory}`} key={idx}>
              <button className="after:bg-primary relative px-4 py-2 capitalize after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
                {category.subCategory}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
