import React from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Link
import Link from "next/link";

// Search component
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <header className="w-full shadow-sm font-second bg-gradient-to-r from-main/60 to-lightGray/20">
      <nav className="h-[5rem] flex items-center px-6 lg:px-14">
        {/* navigation logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide duration-300 hover:text-accent"
        >
          Funiro.
        </Link>

        {/* navigation list */}
        <div className="ml-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 font-medium duration-300 hover:text-accent"
              >
                Products{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 font-medium duration-300 hover:text-accent"
              >
                Rooms{" "}
                <span>
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 font-medium duration-300 hover:text-accent"
              >
                Inspiration{" "}
              </Link>
            </li>
          </ul>
        </div>

        {/* Search input */}
        <Search />

        {/* Wishlist, Cart and Profile */}
        <div className="flex items-center gap-[.9rem] ml-auto">
          {/* Wishlist */}
          <span className="cursor-pointer">
            <HeartIcon className="w-6 h-6 duration-300 hover:text-accent" />
          </span>

          {/* Cart */}
          <span className="cursor-pointer">
            <ShoppingCartIcon className="w-6 h-6 duration-300 hover:text-accent" />
          </span>

          {/* Profile */}
          <Profile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
