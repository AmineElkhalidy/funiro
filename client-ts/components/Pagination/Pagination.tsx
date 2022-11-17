import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Pagination() {
  return (
    <div className="flex gap-4 mt-16 justify-center">
      <div className="w-12 h-12 bg-[#D9D9D9] p-2 text-darkerGray hover:bg-darkerGray hover:text-white hover:cursor-pointer">
        <ChevronLeftIcon />
      </div>

      <p className="w-12 h-12 text-xl font-bold text-white flex justify-center items-center bg-darkerGray hover:bg-darkerGray hover:text-white hover:cursor-pointer">
        1
      </p>

      <p className="w-12 h-12 text-xl font-bold bg-[#D9D9D9] flex justify-center items-center text-darkerGray hover:bg-darkerGray hover:text-white hover:cursor-pointer">
        2
      </p>

      <p className="w-12 h-12 text-xl font-bold bg-[#D9D9D9] flex justify-center items-center text-darkerGray hover:bg-darkerGray hover:text-white hover:cursor-pointer">
        3
      </p>

      <p className="w-12 h-12 text-xl font-bold bg-[#D9D9D9] flex justify-center items-center text-darkerGray hover:bg-darkerGray hover:text-white hover:cursor-pointer">
        4
      </p>
      <div className="w-12 h-12 p-2 bg-[#D9D9D9] text-darkerGray hover:bg-darkerGray hover:text-white hover:cursor-pointer">
        <ChevronRightIcon />
      </div>
    </div>
  );
}
