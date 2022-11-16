import React from "react";

// Search icon
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="flex items-center ml-6 h-[2.25rem] w-[30%] rounded-md overflow-hidden"
    >
      <span className="inline-flex items-center ml-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </span>

      <input
        className="w-full h-full px-2 text-sm border-none outline-none bg-none"
        placeholder="Search for minimalist chair"
      />
    </div>
  );
};

export default Search;
