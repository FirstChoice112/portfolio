"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "rgba(18, 18, 18, 0.9)" }}
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <div className="bg-gradient-to-r from-purple-500 to-green-400 text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center">
            JS
          </div>
        </Link>

        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          onClickLink={() => setNavbarOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
