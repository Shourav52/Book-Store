"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isLoggedIn, logout } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
  const updateAuth = () => {
    setLoggedIn(isLoggedIn());
  };

  updateAuth(); // initial check

  window.addEventListener("auth-change", updateAuth);

  return () => {
    window.removeEventListener("auth-change", updateAuth);
  };
}, []);


  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  };

  const navLinkClass = (path) =>
    pathname === path
      ? "text-primary font-semibold border-b-2 border-primary"
      : "hover:text-primary";


  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
            <li>
              <Link className={navLinkClass("/")} href="/">Home</Link>
            </li>
            <li>
              <Link className={navLinkClass("/about")} href="/about">About</Link>
            </li>
            <li>
              <Link className={navLinkClass("/contact")} href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <img
          className="w-10 rounded-full"
          src="https://img.freepik.com/premium-vector/open-book-icon-open-book-logo-with-white-background_1153029-87.jpg"
          alt="logo"
        />
        <span className="ml-2 text-xl font-bold">Book Library</span>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6">
          <li>
            <Link className={navLinkClass("/")} href="/">Home</Link>
          </li>
          <li>
            <Link className={navLinkClass("/about")} href="/about">About</Link>
          </li>
          <li>
            <Link className={navLinkClass("/contact")} href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        {loggedIn ? (
          <button onClick={handleLogout} className="btn btn-error btn-sm">
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

