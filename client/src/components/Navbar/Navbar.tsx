import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarLinks } from "../../constants";


const Navbar = () => {

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
