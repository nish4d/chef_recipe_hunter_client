import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaAlignRight, FaBars, FaUser } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      {/* navbar section */}
      <div className="flex justify-between items-center bg-secondary p-4 sm:px-8 md:px-20 py-4 md:py-8 shadow-xl">
        <Link className="text-primary font-extrabold text-3xl" to="/">
          Americana
        </Link>
        <nav className="space-x-8 hidden md:block font-bold text-xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "text-white")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </nav>
        {user ? (
          <div className="flex gap-4 items-center">
            <div
              className="hover:tooltip w-10 h-10 rounded-full tooltip-open hover:tooltip-bottom hover:tooltip-primary"
              data-tip={user.displayName}
            >
              {user.photoURL ? <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              /> : <FaUser className="text-xl mt-3 text-primary"></FaUser> }
              
            </div>
            <Link
              to="/login"
              onClick={handleLogout}
              className="hidden md:block px-4 py-2 bg-primary rounded text-white"
            >
              Log Out
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="hidden md:block px-4 py-2 bg-primary rounded text-white"
          >
            Login
          </Link>
        )}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FaAlignRight className="text-primary"></FaAlignRight>
        </button>
      </div>
      <div className="md:hidden">
        {open && (
          <nav className="shadow-xl p-4">
            <div className="flex flex-col gap-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded "
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-primary px-2 rounded"
                    : "hover:bg-primary px-2 rounded hover:text-white"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </div>
            <div className="mt-4">
              {user ? (
                <Link
                to="/login"
                onClick={handleLogout}
                className=" px-3 py-2 bg-primary rounded text-white"
              >
                Log Out
              </Link>
              ) : (
                <Link
                  to="/login"
                  className=" px-3 py-2 bg-primary rounded text-white"
                >
                  Log In
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
