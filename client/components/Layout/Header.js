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
    <header className="fixed top-0 left-0 z-50 w-full font-second bg-opacity-30 bg-gradient-to-r from-main/60 to-lightGray/40">
      <nav className="h-[5rem] flex items-center px-20">
        {/* navigation logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Funiro.
        </Link>

        {/* navigation list */}
        <div className="ml-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-md"
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
                className="inline-flex items-center gap-2 text-md"
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
                className="inline-flex items-center gap-2 text-md"
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
            <HeartIcon className="w-6 h-6" />
          </span>

          {/* Cart */}
          <span className="cursor-pointer">
            <ShoppingCartIcon className="w-6 h-6" />
          </span>

          {/* Profile */}
          <Profile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
