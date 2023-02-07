import React from "react";

// Image
import Image from "next/image";
// Link
import Link from "next/link";

// Splider slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

// React Slik
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data
import { featuresData, productsData, tipsData } from "../../data/data";

// Images
import { images } from "../../data/data";

// Arrow icon
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";

// Furniture image
import Furniture from "../../public/images/furniture.png";
import Inspiration1 from "../../public/images/inspiration-1.png";
import Inspiration2 from "../../public/images/inspiration-2.png";
import Inspiration3 from "../../public/images/inspiration-3.png";

const inspiration = [
  {
    image: Inspiration1,
  },
  {
    image: Inspiration2,
  },
  {
    image: Inspiration3,
  },
];

const settings = {
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};

const Hero = () => {
  return (
    <React.Fragment>
      {/* Hero section */}
      <section
        className="bg-opacity-40 bg-gradient-to-r from-main/60 to-lightGray/20"
        id="hero"
      >
        <div className="relative pt-24">
          {/* Info box */}
          <div className="absolute z-40 px-8 py-12 top-4 bg-white/80 backdrop-blur-sm background left-14">
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
        </div>

        {/* Slider */}
        <Splide
          className="relative w-full h-full"
          options={{
            type: "loop",
            drag: "free",
            gap: "1rem",
            arrows: false,
            pagination: false,
            perPage: 1.5,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide key={1}>
            <article className="relative">
              <Image src={images[1]} className="" alt="Couches with 2 seats" />

              <div className="absolute px-6 py-4 right-8 bottom-8 bg-white/60 backdrop-blur-sm">
                <h3 className="text-xl font-medium">Bohauss</h3>
                <p className="mb-1 text-sm text-gray">Luxury big sofa 2-seat</p>

                <div className="flex items-center justify-between ">
                  <span className="block">Rp 17.000.000</span>
                  <span className="">
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </SplideSlide>

          <SplideSlide key={2}>
            <article className="relative">
              <Image
                src={images[0]}
                className="w-full"
                alt="Couches with 2 seats"
              />

              <div className="absolute px-6 py-4 right-8 bottom-8 bg-white/60 backdrop-blur-sm">
                <h3 className="text-xl font-medium">Bohauss</h3>
                <p className="mb-1 text-sm text-gray">Luxury big sofa 2-seat</p>

                <div className="flex items-center justify-between ">
                  <span className="block">Rp 17.000.000</span>
                  <span className="">
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </SplideSlide>

          <SplideSlide key={3}>
            <article className="relative">
              <Image src={images[2]} className="" alt="Couches with 2 seats" />

              <div className="absolute px-6 py-4 right-8 bottom-8 bg-white/60 backdrop-blur-sm">
                <h3 className="text-xl font-medium">Bohauss</h3>
                <p className="mb-1 text-sm text-gray">Luxury big sofa 2-seat</p>

                <div className="flex items-center justify-between ">
                  <span className="block">Rp 17.000.000</span>
                  <span className="">
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </SplideSlide>
        </Splide>
      </section>

      {/* Features section */}
      <section id="features">
        {/* Container */}
        <div className="grid justify-center gap-16 py-20 md:grid-cols-2 md:gap-12 md:place-items-center lg:grid-cols-4 lg:px-16 lg:py-24">
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
      <section className="py-20 sm:py-24" id="products">
        <h2 className="mb-10 text-3xl font-bold text-center text-darkGray">
          Our Products
        </h2>

        {/* Products container */}
        <div className="flex items-center justify-center">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {productsData.map((product) => (
              <article
                key={product.id}
                className="w-[220px] relative bg-zinc-50 cursor-pointer group duration-300"
              >
                <div>
                  <div className="relative">
                    <Image src={product.image} alt="Product item image" />

                    {product.promotionTag !== "" ? (
                      <div className="absolute right-4 top-4">
                        <span
                          className={`block w-[2.2rem] h-[2.2rem] text-xs text-white rounded-full ${
                            product.promotionTag === "New"
                              ? "bg-green-400"
                              : "bg-main"
                          }`}
                        >
                          <span className="flex items-center justify-center h-full">
                            {product.promotionTag}
                          </span>
                        </span>
                      </div>
                    ) : (
                      <span></span>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="mb-1 text-lg font-medium">{product.name}</h3>
                    <p className="mb-1 text-[.8rem] text-gray">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {product.newPrice}
                      </span>
                      <span className="text-xs line-through text-gray">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlap content */}
                <div className="hidden group-hover:block">
                  <div className="absolute top-0 left-0 z-50 w-full h-full bg-black bg-opacity-40">
                    <div className="flex items-center justify-center h-full">
                      <div className="space-y-4 text-center">
                        <button className="px-8 py-3 text-sm font-medium duration-300 bg-white text-main hover:bg-main hover:text-white">
                          Add to cart
                        </button>

                        <div className="flex items-center justify-center px-10 space-x-6 text-sm text-white ">
                          <span className="inline-flex items-center gap-1 hover:text-blue-600">
                            <ShareIcon className="w-5 h-5" /> Share
                          </span>

                          <span className="inline-flex items-center gap-1 hover:text-red-600">
                            <HeartIcon className="w-5 h-5" /> Like
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Show more */}
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-block px-10 py-3 font-medium duration-300 border text-main border-main hover:bg-main hover:text-white"
          >
            Show More
          </Link>
        </div>
      </section>

      {/* Inspiration section */}
      <section className="w-full h-full bg-main/30" id="inspiration">
        {/* Container */}
        <div className="max-w-6xl min-h-screen px-4 py-20 mx-auto md:py-24">
          <div className="grid gap-12 sm:grid-cols-2 ">
            {/* Content container */}
            <div className="w-full h-full space-y-6 sm:mt-14 md:mt-36">
              <h2 className="text-3xl font-bold text-darkGray">
                50+ Beautiful rooms inspiration
              </h2>
              <p className="text-sm">
                Our designer already made a lot of beautiful prototype of rooms
                that inspire you
              </p>

              <div>
                <Link
                  href={""}
                  className="inline-block px-10 py-3 font-medium text-white duration-300 bg-main"
                >
                  Explore More
                </Link>
              </div>
            </div>

            {/* Images slider */}
            <div className="w-full h-full">
              <Slider {...settings} className="grid">
                <article key={1}>
                  <Image
                    className="w-[70%] md:w-[60%]"
                    src={Inspiration1}
                    alt="Inspiration"
                  />
                </article>

                <article key={2}>
                  <Image
                    className="w-[70%] md:w-[60%]"
                    src={Inspiration2}
                    alt="Inspiration"
                  />
                </article>

                <article key={3}>
                  <Image
                    className="w-[70%] md:w-[60%]"
                    src={Inspiration3}
                    alt="Inspiration"
                  />
                </article>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section className="py-20 md:py-24" id="tips">
        <h2 className="mb-10 text-3xl font-bold text-center text-darkGray">
          Tips & Tricks
        </h2>

        {/* Tips container */}
        <div className="">
          <div className="grid max-w-6xl gap-6 mx-auto place-items-center sm:grid-cols-2 md:grid-cols-3">
            {tipsData.map((tip) => (
              <div className="overflow-hidden bg-white shadow-md w-fit">
                <div className="mb-4">
                  <Image src={tip.image} alt="tip descriptive image" />
                </div>

                <div className="p-2">
                  <h3 className="mb-3 text-lg font-semibold leading-5 ">
                    {tip.title}
                  </h3>
                  <date className="text-sm text-gray">{tip.date}</date>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture section */}
      <section className="py-20 md:py-24" id="furniture">
        <h4 className="font-semibold text-center text-gray">
          Share your setup with
        </h4>
        <h2 className="mb-10 text-3xl font-bold text-center text-darkGray">
          #FuniroFurniture
        </h2>

        <div className="w-full h-full">
          <Image src={Furniture} alt="Funiro furniture preview" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
