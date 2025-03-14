import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      {/* Please do not remove these */}

      <p className="bg-red-800 text-2xl font-semibold text-white p-4"> Please make sure color You chose is assigned. for now use color given by Fariya</p>
      <ol className="px-4">
        <p>Note: After complete a page. Link that with li. or with the li content add pathname</p>
        <p>ex: about us page- pathname: about-us</p>
      <p className="font-bold text-red-700">Shared style</p>
      <li>Section Header - Please do this first</li>
        <p className="font-bold">Need to complete</p>
        <li>About Us page -- Arif</li>
        <li>Join Us page -- Fariya</li>
        <li>Error page -- Nure Alam</li>
        <li>Navbar</li>
        <li>Footer</li>
        <ol className="ml-3">
          <p className="font-semibold">Home sections</p>
          <li>Banner -- Musfika</li>
          <li>Recently Viewed</li>
          <li>Features</li>
          <li>Keeping your data safe</li>
          <li>Popular now</li>
          <li>Theater shows</li>
          <li>Flight</li>
          <li>Reviews</li>
        </ol>
        
        
      </ol>
      
    </>
  );
};

export default MainLayout;