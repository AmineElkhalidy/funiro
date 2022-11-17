import { useState } from "react";

export default function Filters() {
  const [price, setPrice] = useState<number>(0);

  return (
    <div className="w-80">
      <h1 className="text-3xl font-bold text-darkerGray mb-8">Filters</h1>

      <h2 className="text-2xl font-bold text-darkerGray mb-4">Categories</h2>

      <div className="relative">
        <label className="text-2xl font-bold text-darkerGray mb-4 ">
          Price
        </label>
        <br />
        <p className="text-sm absolute top-12 text-darkerGray font-semibold">
          $0
        </p>
        <p className="text-sm absolute top-12 right-0 text-darkerGray font-semibold">
          $5000
        </p>
        <input
          type="range"
          name="pricing"
          id="pricing"
          min={0}
          max={5000}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="w-full mt-12 mb-12"
        />

        <p className="text-sm absolute bottom-4 left-1/2 -translate-x-1/2 text-darkerGray font-semibold">
          ${price}
        </p>
      </div>

      <h2 className="text-2xl font-bold text-darkerGray mb-4">Condition</h2>
      <div className="flex items-center gap-2">
        <input type="checkbox" name="new" id="new" className="" />
        <label htmlFor="new">New</label>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          name="refurbished"
          id="refurbished"
          className=""
        />
        <label htmlFor="refurbished">Refurbished</label>
      </div>
    </div>
  );
}
