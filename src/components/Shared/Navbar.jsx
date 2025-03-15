import { Handshake, Home, Mail, Moon, Sun, User } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about-us", label: "About Us", icon: User },
    { path: "/join-us", label: "Join Us", icon: Mail },
    { path: "/terms", label: "Terms", icon: Handshake },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-gray-200 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* logo and primary navigation */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold">
                    <span className="text-[#20b6b1]">Tick</span>
                    <span className="text-gray-600">To</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex">
              {/* desktop navigation */}
              <div className="hidden lg:ml-8 lg:flex sm:space-x-4">
                {navLinks.map(({ path, label, icon: Icon }) => (
                  <NavLink
                    key={Icon}
                    to={path}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActivePath(path)
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
                {/* theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-gray-300" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-[#20b6b1] hover:bg-[#c2eeec] rounded-md transition-colors duration-200 hidden xl:flex"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-[#317371] hover:bg-[#4f8886] rounded-md shadow-sm transition-colors duration-200"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;
