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
        <div className="relative flex flex-wrap items-center justify-between px-4 py-2 sm:px-8 sm:py-4 md:px-16 md:py-6 lg:px-20 lg:py-8 xl:px-24">
            <Link
                to="/"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
            >
                hocsinhgioitoan
            </Link>
            <div className="flex items-center gap-x-10 mt-2 sm:mt-0 md:ml-auto">
                {NavbarLinks.map((link) => (
                    <NavLink
                        to={link.path}
                        key={link.name}
                        className={({ isActive }) =>
                            isActive ? `text-white` : `text-gray-400`
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
