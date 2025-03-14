import { Link } from "react-router";

const Navbar = () => {
  return (
    <div  className=" py-3 bg-[#A2B9A7] w-full sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to={'/'}>Home</Link></li>
             <li><Link to={'/about-us'}>About us</Link></li>
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