import { Handshake, Home, Mail, Menu, Moon, Sun, User } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { GrDashboard } from 'react-icons/gr';
import Logo from './Logo';

const Navbar = () => {
  const { user, logOut, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/events', label: 'Events', icon: Handshake },
    { path: '/about-us', label: 'About Us', icon: User },
    { path: '/join-us', label: 'Join Us', icon: Mail },
    // { path: '/dashboard', label: 'Dashboard', icon: GrDashboard },
  ];

  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Logged out successfully',
        });
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (!e.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeDropdowns);
    return () => document.removeEventListener('click', closeDropdowns);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="fixed w-full top-0 z-[500] text-white bg-black/20 backdrop-blur-sm">
      <div>

        <div className="container mx-auto px-2">
          <div className="flex py-3 justify-between">
            {/* logo and primary navigation */}
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/" className="flex gap-2 items-center">
                  <Logo/>
                  <div className="text-2xl md:text-3xl font-bold">
                    <span className="text-[#317371]">Tick</span>
                    <span className="">To</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex">
              {/* desktop navigation */}
              <div className="hidden sm:space-x-4 lg:ml-8 lg:flex mx-4">
                {navLinks.map(({ path, label, icon: Icon }, index) => (
                  <NavLink
                    key={index}
                    to={path}
                    className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActivePath(path)
                        ? 'border-b-2 border-[#317371] text-[#317371] rounded-none'
                        : ' hover:border-b hover:border-[#317371] hover:text-[#317371] transition rounded-none'
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
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img
                            className="rounded-full border-[1px]"
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-[#41a5a2]/70 p-2 font-bold shadow backdrop-blur-3xl"
                      >
                        <li className="text-center">{user.displayName}</li>
                        <li>
                          <Link to="/updateprofile">Update Profile</Link>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li onClick={handleLogout}>
                          <a>Logout</a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to="/auth/login"
                      className="rounded-sm border border-[#317371] px-2 py-1 md:px-4 md:py-[6px] text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#4f8886]"
                    >
                      Login
                    </Link>
                  )}
                </div>
                {/* theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-1 rounded-full transition-colors duration-200 hover:text-[#317371]"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
                </button>
                
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
                        ? 'bg-teal-50 text-teal-600'
                        : 'hover:bg-gray-50 hover:text-teal-600'
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
