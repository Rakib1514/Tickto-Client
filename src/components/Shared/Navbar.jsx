import { Link } from "react-router";

const Navbar = () => {
  return (
    <div  className=" py-3 bg-[#A2B9A7] w-full sticky top-0 z-10">
      {/* Please create navbar here /src/components/Navbar.jsx */}
      <Link className="btn mx-5" to='/join-us'>Join Us</Link>
      <Link className="btn mx-5" to='/terms-and-condition'>Terms and Conditions</Link>

      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li>
              <Link className="btn pl-5" to='/join-us'>Join Us</Link>
              </li>
            </ul>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;