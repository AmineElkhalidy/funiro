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
    <footer className="relative px-6 mt-64 mb-12 overflow-hidden font-second md:px-20">
      <div className="grid gap-12">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 footer__content">
          <div className="text-gray">
            <Link
              href="/"
              className="inline-block mb-4 text-xl font-bold tracking-wide text-darkerGray"
            >
              Funiro.
            </Link>

            <p className="mb-3 text-sm">
              Worldwide furniture store since 2020. We sell over 1000+ branded
              products on our website
            </p>

            <p className="flex items-center gap-2 mb-3 text-xs font-medium">
              <MapPinIcon className="w-4 h-4" /> Sawojajar Malang, Indonesia
            </p>

            <p className="flex items-center gap-2 mb-3 text-xs font-medium">
              <PhoneIcon className="w-4 h-4" /> +6289 456 3455
            </p>

            <Link href={"www.funiro.com"} className="">
              www.funiro.com
            </Link>
          </div>

          {/* Menu List */}
          <div>
            <h3 className="mb-4 text-lg font-bold footer__title">Menu</h3>

            <ul className="grid gap-2 text-md">
              <li>
                <Link href="" className="footer__link">
                  Products
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  Rooms
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  Inspiration
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  Terms & Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Account List */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Account</h3>

            <ul className="grid gap-2 text-md">
              <li>
                <Link href="" className="footer__link">
                  My Account
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  Checkout
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  My Cart
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  My Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected List */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Stay Connected</h3>

            <ul className="grid gap-2 text-md">
              <li>
                <Link href="" className="footer__link">
                  Facebook
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
                  Instagram
                </Link>
              </li>

              <li>
                <Link href="" className="footer__link">
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
                className="block p-1 rounded-md outline-none bg-gray"
                style={{ backgroundColor: "white" }}
              />
              <span className="inline-block p-2 bg-main">
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
