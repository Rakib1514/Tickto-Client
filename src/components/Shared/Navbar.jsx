import { Link } from "react-router";

const Navbar = () => {
  return (
    <div  className=" py-3 bg-[#A2B9A7] w-full sticky top-0 z-10">
      Please create navbar here /src/components/Navbar.jsx
      <Link className="btn mx-5" to='/join-us'>Join Us</Link>
    </div>
  );
};

export default Navbar;