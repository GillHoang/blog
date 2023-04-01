import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavbarLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {

  const baseClasses = "text-white font-semibold text-lg opacity-70 hover:opacity-100";

  return (
    <div className="fixed top-5 left-1/2 flex items-center gap-x-10 justify-between -translate-x-1/2 bg-[#3A3A43] max-w-[40vw] w-full px-20 py-5 rounded-full">
      <Link to="/">
        <h3 className="">
          <span className="text-2xl font-bold">M</span>ERN
        </h3>
      </Link>
      <div className="flex items-center gap-x-10">
        {NavbarLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              isActive ? `${baseClasses} opacity-100` : baseClasses
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
