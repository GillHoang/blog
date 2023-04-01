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
  const baseClasses = "font-semibold text-lg";

  return (
    <div className="fixed top-5 left-1/2 flex items-center gap-x-10 justify-between -translate-x-1/2 bg-backgroundColorLight max-w-[40vw] w-full px-20 py-5 rounded-full">
      <Link to="/">
        <h3 className="">hocsinhgioitoan</h3>
      </Link>
      <div className="flex items-center gap-x-10">
        {NavbarLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              isActive ? `${baseClasses} text-white` : `${baseClasses} text-gray-400`
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
