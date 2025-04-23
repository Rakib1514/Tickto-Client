import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import { Link, Outlet } from "react-router";
import loadingAnimation from "../Assets/lotties/loading_ani_light.json";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

const MainLayout = () => {
  // Fetch all categories
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const response = await axios.get("/api/categories");
  //     return response.data.data || [];
  //   },
  // });

  // if (isLoading)
  //   return (
  //     <div className="flex min-h-screen items-center justify-center text-3xl ">
  //       <div className="w-96">
  //         <Lottie animationData={loadingAnimation}></Lottie>
  //       </div>
  //     </div>
  //   );

  // if (error) return <h1>Error fetching categories</h1>;

  return (
    <>
      {/* <EidFeature /> */}
      <Navbar />

      {/* Categories under navbar */}
      {/* <div className="sticky top-16 py-1  text-black z-[500]  bg-white ">
        <div className="container pb-2 mx-auto flex flex-wrap gap-3 md:gap-5 w-full">
          {data?.map((category, idx) => (
            <Link key={idx} to={`/events/${category.subCategory}`}>
              <button className="top__category__btn capitalize cursor-pointer">
                {category.subCategory}
              </button>
            </Link>
          ))}
        </div>
      </div> */}

      <main className="-mt-18 md:-mt-9 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
