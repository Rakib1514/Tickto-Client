import { Link } from "react-router";

const Navbar = () => {
  return (
    <div  className=" py-6 bg-[#A2B9A7] w-full sticky top-0 ">
      Please create navbar here /src/components/Navbar.jsx
      <Link className="btn mx-5" to='/join-us'>Join Us</Link>
    </div>
  );
};

export default Navbar;