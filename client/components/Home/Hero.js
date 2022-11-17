import React from "react";

// Image
import Image from "next/image";

// Splide & SplideSlide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Data
import { heroData } from "../../data/data";

// Arrow icon
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <React.Fragment>
      {/* Hero section */}
      <section
        className="relative min-h-screen mt-20 bg-opacity-30 bg-gradient-to-r from-main/60 to-lightGray/40"
        id="hero"
      >
        {/* Info box */}
        <div className="absolute top-0 z-40 px-8 py-12 left-14 bg-lightGray">
          <h2 className="mb-8 text-4xl font-bold text-darkGray">
            High-Quality
            <br />
            Furniture Just
            <br />
            For You
          </h2>
          <p className="max-w-xs mb-4 text-gray">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>

          <button
            className="w-full p-4 text-sm font-medium text-white bg-main"
            href="#"
          >
            Shop Now
          </button>
        </div>

        {/* Slider */}
        <Splide
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            perPage: 1,
          }}
        >
          {/* {heroData.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  className="w-[55%]"
                  alt="Couches with 2 seats"
                />

                <div className="absolute px-6 py-4 right-[34rem] bottom-8 bg-main">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="mb-1 text-sm text-gray">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <p className="">{item.surface}</p>
                    <span className="">
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))} */}
        </Splide>
      </section>
    </React.Fragment>
  );
};

export default Hero;
