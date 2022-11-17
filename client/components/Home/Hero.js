import React from "react";

// Image
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data
import { heroData } from "../../data/data";
import { featuresData } from "../../data/data";

// Images
import { images } from "../../data/data";

// Arrow icon
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <React.Fragment>
      {/* Hero section */}
      <section
        className="mt-20 bg-opacity-30 bg-gradient-to-r from-main/60 to-lightGray/40"
        id="hero"
      >
        <div className="relative pt-24">
          {/* Info box */}
          <div className="absolute top-0 z-40 px-8 py-12 bg-white/80 backdrop-blur-sm background left-14">
            <h2 className="mb-8 text-4xl font-bold text-darkGray">
              High-Quality
              <br />
              Furniture Just
              <br />
              For You
            </h2>
            <p className="max-w-xs mb-4 text-gray">
              Our furniture is made from selected and best quality materials
              that are suitable for your dream home
            </p>

            <button
              className="w-full p-4 text-sm font-medium text-white bg-main"
              href="#"
            >
              Shop Now
            </button>
          </div>

          {/* Slider */}
          <Swiper
            className="relative"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1.85}
            spaceBetween={25}
            rewind={true}
          >
            <SwiperSlide>
              <article className="relative">
                <Image
                  src={images[1]}
                  className=""
                  alt="Couches with 2 seats"
                />

                <div className="absolute px-6 py-4 right-8 bottom-8 bg-white/60 backdrop-blur-sm">
                  <h3 className="text-xl font-medium">Bohauss</h3>
                  <p className="mb-1 text-sm text-gray">
                    Luxury big sofa 2-seat
                  </p>

                  <div className="flex items-center justify-between ">
                    <span className="block">Rp 17.000.000</span>
                    <span className="">
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="relative">
                <Image
                  src={images[0]}
                  className="w-full"
                  alt="Couches with 2 seats"
                />

                <div className="absolute px-6 py-4 right-8 bottom-8 bg-white/60 backdrop-blur-sm">
                  <h3 className="text-xl font-medium">Bohauss</h3>
                  <p className="mb-1 text-sm text-gray">
                    Luxury big sofa 2-seat
                  </p>

                  <div className="flex items-center justify-between ">
                    <span className="block">Rp 17.000.000</span>
                    <span className="">
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="relative">
                <Image
                  src={images[2]}
                  className=""
                  alt="Couches with 2 seats"
                />

                <div className="absolute px-6 py-4 right-8 bottom-8 bg-white/60 backdrop-blur-sm">
                  <h3 className="text-xl font-medium">Bohauss</h3>
                  <p className="mb-1 text-sm text-gray">
                    Luxury big sofa 2-seat
                  </p>

                  <div className="flex items-center justify-between ">
                    <span className="block">Rp 17.000.000</span>
                    <span className="">
                      <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Features section */}
      <section className="" id="features">
        {/* Container */}
        <div className="grid justify-center gap-16 py-12 md:grid-cols-2 md:gap-12 md:place-items-center lg:grid-cols-4 lg:px-16 ">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:justify-start"
            >
              {/* Image */}
              <Image src={feature.image} alt="" />

              {/* Data container */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-medium text-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products section */}
      <section id="products" className="mt-6">
        <h2 className="text-3xl font-bold text-center text-darkGray">
          Our Products
        </h2>
      </section>
    </React.Fragment>
  );
};

export default Hero;
