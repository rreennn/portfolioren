import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-14 w-[70%] mt-30 fixed bg-white flex justify-between items-center px-10 rounded-4xl shadow-xl z-10">
      <h1 className="font-bold text-xl hover:text-pink-500 duration-200">
        PORTFOLIO
      </h1>
      <ul className="flex gap-6 font-medium text-lg">
        <li>
          <Link href="/" className="group duration-150">
            Home
            <div className="bg-pink-400 h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
          </Link>
        </li>
        <li>
          <Link href="/" className="group">
            About
            <div className="bg-pink-400 h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
          </Link>
        </li>
        <li>
          <Link href="/" className="group">
            Project
            <div className="bg-pink-400 h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
          </Link>
        </li>
        <li>
          <Link href="/" className="group">
            Contact
            <div className="bg-pink-400 h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
