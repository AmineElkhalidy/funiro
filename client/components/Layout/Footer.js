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

            <Link
              href="https://www.google.com/maps/place/San+Francisco,+CA,+USA/@37.757815,-122.5076409,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155"
              className="flex items-center gap-2 mb-3 text-xs font-medium duration-300 hover:text-sm"
              target="_blank"
            >
              <MapPinIcon className="w-4 h-4" /> Sawojajar Malang, Indonesia
            </Link>

            <Link
              href="tel:+6289 456 3455"
              className="flex items-center gap-2 mb-3 text-xs font-medium duration-300 hover:text-sm"
            >
              <PhoneIcon className="w-4 h-4" /> +6289 456 3455
            </Link>

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
                  className="font-medium duration-300 hover:text-main hover:text-base "
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base "
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base "
                >
                  Inspiration
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base "
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base "
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
                  className="font-medium duration-300 hover:text-main hover:text-base"
                >
                  My Account
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base"
                >
                  Checkout
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base"
                >
                  My Cart
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base"
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
                  className="font-medium duration-300 hover:text-main hover:text-base"
                >
                  Facebook
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base"
                >
                  Instagram
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="font-medium duration-300 hover:text-main hover:text-base"
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
                className="block p-1 duration-300 outline-none bg-gray/10 placeholder:text-sm focus:border focus:border-main "
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
