import { Link, Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MainLayout = () => {
  // Fetch all categories
  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data.data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl">
        <span>Loading...</span>
      </div>
    );
  if (error) return <h1>Error fetching categories</h1>;

  return (
    <>
      <Navbar />
      {/* Categories under navbar */}
      <div className="container mx-auto flex gap-4 w-full sticky top-16 z-10 bg-base-100 backdrop-blur-2xl opacity-80 flex-wrap">
        {data?.map((category) => (
          <Link key={category.subCategory} to={`/events/${category.subCategory}`}>
          <button className="top__category__btn">
            {category.subCategory}
          </button></Link>
        ))}
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
