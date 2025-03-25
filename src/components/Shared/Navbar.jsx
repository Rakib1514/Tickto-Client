import { Handshake, Home, Mail, Menu, Moon, Sun, User } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

  const { user, logOut, setLoading } = useContext(AuthContext)

  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/events", label: "Events", icon: Handshake },
    { path: "/about-us", label: "About Us", icon: User },
    { path: "/join-us", label: "Join Us", icon: Mail },
  ];

  const handleLogout = () => {
    logOut()
      .then(res => {

        console.log(res)
        
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Logged out successfully"
        });
        setLoading(false)
      })
      
      .catch(err => {
        console.log(err)
      })
  }


  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#a2b9a7]/65 text-white border-gray-200 backdrop-blur-sm">
        <div className="container mx-auto px-2">
          <div className="flex justify-between h-16">
            {/* logo and primary navigation */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center">
                  <span className="text-3xl font-bold">
                    <span className="text-[#317371]">Tick</span>
                    <span className="">To</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex">
              {/* desktop navigation */}
              <div className="hidden lg:ml-8 lg:flex sm:space-x-4">
                {navLinks.map(({ path, label, icon: Icon }, index) => (
                  <NavLink
                    key={index}
                    to={path}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-150 ${isActivePath(path)
                      ? "text-[#20b6b1] bg-teal-50"
                      : "text-gray-600 hover:text-[#41a5a2] hover:bg-gray-50"
                      }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </NavLink>
                ))}
              </div>
              {/* right side controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">

                  {user ?
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img
                          className="border-[1px] rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL} />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#41a5a2]/70  backdrop-blur-3xl font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className="text-center">{user.displayName}</li>
                        <li><a>Update Profile</a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                      </ul>
                    </div>
                    :
                    <Link
                      to="/auth/login"
                      className="px-4 py-2 text-sm font-medium text-white bg-[#317371] hover:bg-[#4f8886] rounded-md shadow-sm transition-colors duration-200"
                    >
                      Login
                    </Link>
                  }


                </div>
                {/* theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="p- rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-7 w-7 " />
                  ) : (
                    <Moon className="h-7 w-7 " />
                  )}
                </button>
                {/* Mobile menu button */}
                <div className="flex items-center lg:hidden mobile-menu">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navLinks.map(({ path, label, icon: Icon }, index) => (
                  <NavLink
                    key={index}
                    to={path}
                    className={`flex items-center px-3 py-2  font-medium rounded-md transition-colors duration-150 ${isActivePath(path)
                      ? "text-teal-600 bg-teal-50"
                      : " hover:text-teal-600 hover:bg-gray-50"
                      }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;
