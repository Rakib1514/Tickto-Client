import { Handshake, Home, Mail, Menu, Moon, Sun, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router";
import { setLoading, userSignOut } from "../../Redux/authSlice";
import Logo from "./Logo";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);
  console.log(user)

  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/travel/bus", label: "Buses", icon: User },
    // { path: "/events", label: "Events", icon: Handshake },
    { path: "/join-us", label: "Contact Us", icon: Mail },
  ];

  const handleLogout = async () => {
    try {
      dispatch(setLoading(true));
      const res = await userSignOut();
      console.log(res)
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
      <nav className="fixed w-full top-0 z-[500] text-black bg-secondary/70">
        <div>
          <div className="container mx-auto px-2">
            <div className="flex py-2 justify-between">
              {/* logo and primary navigation */}
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="flex gap-2 items-center">
                    <Logo />
                    <div className="text-2xl md:text-3xl font-bold">
                      <span className="text-primary">Tick</span>
                      <span className="">To</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex ">
                {/* desktop navigation */}
                <div className="hidden lg:ml-8 lg:flex mx-4">
                  {navLinks.map(({ path, label, icon: Icon }, index) => (
                    <NavLink
                      key={index}
                      to={path}
                      className={`inline-flex items-center rounded-lg px-3 py-2 mx-1 text-sm font-semibold transition-colors duration-150 ${
                        isActivePath(path)
                          ? "border-b-2 border-primary text-primary rounded-none"
                          : " hover:border-b-2 hover:border-primary hover:text-primary transition rounded-none"
                      }`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                    </NavLink>
                  ))}
                </div>
                {/* right side controls */}
                <div className="flex items-center md:space-x-4">
                  <div className="flex items-center md:space-x-3">
                    {user ? (
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img
                              referrerPolicy="no-referrer"
                              className="rounded-full "
                              alt="Tailwind CSS Navbar component"
                              src={user?.photoURL}
                            />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content rounded-box z-1 text-white w-52 bg-[#78a6c4] p-2 font-bold shadow backdrop-blur-3xl"
                        >
                          <li className="text-center">{user?.name}</li>

                          <li>
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              disabled={isLoading}
                              className="flex items-center justify-center gap-2"
                            >
                              {isLoading ? (
                                <>
                                  <span className="loading loading-spinner loading-sm"></span>{" "}
                                  Logging out...
                                </>
                              ) : (
                                "Logout"
                              )}
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to="/auth/login"
                        className="rounded-sm border border-primary px-2 py-1 md:px-4 md:py-[6px] text-sm font-medium text-primary shadow-sm transition-colors duration-200 hover:bg-primary hover:text-white"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                  {/* theme toggle */}
                  {/* <button
                    onClick={toggleTheme}
                    className="p-1 rounded-full transition-colors duration-200 hover:text-primary"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-7 w-7" />
                    ) : (
                      <Moon className="h-7 w-7" />
                    )}
                  </button> */}

                  {/* Mobile menu button */}
                  <div className="mobile-menu flex items-center lg:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-gray-100"
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
                <div className="space-y-1 pt-2 pb-3">
                  {navLinks.map(({ path, label, icon: Icon }, index) => (
                    <NavLink
                      key={index}
                      to={path}
                      className={`flex items-center rounded-md px-3 py-2 font-medium transition-colors duration-150 ${
                        isActivePath(path)
                          ? "bg-[#78a6c4]/60 text-primary"
                          : "hover:bg-[#78a6c4]/30 hover:text-primary"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
