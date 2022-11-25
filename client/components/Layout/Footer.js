import React from "react";

// Link
import Link from "next/link";

// Icons
import {
  MapPinIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="relative px-6 mt-32 mb-12 overflow-hidden font-second md:px-14">
      <div className="py-16 border-t-2 border-gray/20">
        <div className="grid gap-10 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Footer logo, description, address and phone */}
          <div className="text-gray">
            <Link
              href="/"
              className="inline-block mb-4 text-xl font-bold tracking-wide duration-300 text-darkerGray hover:text-main"
            >
              Funiro.
            </Link>

            <p className="max-w-xs mb-4 text-sm">
              Worldwide furniture store since 2020. We sell over 1000+ branded
              products on our website
            </p>

            <p className="flex items-center gap-2 mb-3 text-xs font-medium">
              <MapPinIcon className="w-4 h-4" /> Sawojajar Malang, Indonesia
            </p>

            <p className="flex items-center gap-2 mb-3 text-xs font-medium">
              <PhoneIcon className="w-4 h-4" /> +6289 456 3455
            </p>

            <Link
              href={"www.funiro.com"}
              className="duration-300 hover:text-main"
            >
              www.funiro.com
            </Link>
          </div>

          {/* Menu List */}
          <div className="grid lg:justify-center ">
            <h3 className="mb-3 text-lg font-bold footer__title">Menu</h3>

            <ul className="grid gap-4 text-sm text-gray">
              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Inspiration
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Terms & Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Account List */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Account</h3>

            <ul className="grid gap-4 text-sm text-gray">
              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  My Account
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Checkout
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  My Cart
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  My Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected List */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Stay Connected</h3>

            <ul className="grid gap-4 text-sm text-gray">
              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Facebook
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Instagram
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Stay updated</h3>

            <div className="flex items-center mb-4 space-x-1">
              <input
                type="text"
                placeholder="Enter your email"
                className="block p-1 outline-none bg-gray/10 placeholder:text-sm"
              />

              <span className="inline-block p-2 cursor-pointer bg-main">
                <PaperAirplaneIcon
                  className="w-4 h-4 -rotate-[25deg]"
                  color="white"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
