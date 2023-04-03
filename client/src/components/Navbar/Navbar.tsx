import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const baseClasses = `text-lg md:text:3xl font-bold`;

  return (
    <div
      className={`fixed z-50 top-5 left-1/2 inline-flex items-center gap-x-10 justify-between -translate-x-1/2 bg-[#3A3A43] max-w-[90vw] lg:max-w-[50vw] w-full px-10 py-5 ${
        isOpen ? "flex-col rounded-[30px]" : "flex-row rounded-full"
      } `}
    >
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="text-xl md:text:3xl font-bold">
          hocsinhgioitoan
        </Link>
        <div className="block lg:hidden" onClick={handleOpen}>
          {isOpen ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <div
        className={`lg:flex items-center gap-x-10 ${
          isOpen ? "flex flex-col" : "hidden"
        }`}
      >
        {NavbarLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              isActive
                ? `${baseClasses} text-white py-3 lg:py-0`
                : `${baseClasses}text-gray-400 py-3 lg:py-0`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
