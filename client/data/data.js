// Hero images
import HeroImg1 from "../public/images/home-1.png";
import HeroImg2 from "../public/images/home-2.png";
import HeroImg3 from "../public/images/home-3.png";

// Features image
import FeatureOne from "../public/images/feature-1.png";
import FeatureTwo from "../public/images/feature-2.png";
import FeatureThree from "../public/images/feature-3.png";
import FeatureFour from "../public/images/feature-4.png";

// Products image
import ProductOne from "../public/images/product-1.png";
import ProductTwo from "../public/images/product-2.png";
import ProductThree from "../public/images/product-3.png";
import ProductFour from "../public/images/product-4.png";
import ProductFive from "../public/images/product-5.png";
import ProductSix from "../public/images/product-6.png";
import ProductSeven from "../public/images/product-7.png";
import ProductEight from "../public/images/product-8.png";

export const heroData = [
  {
    id: "slide-01",
    image: HeroImg1,
    name: "Bohauss",
    description: "Luxury big sofa 2-seat",
    surface: "Rp 17.000.000",
  },
  {
    id: "slide-02",
    image: HeroImg2,
    name: "Bohauss",
    description: "Luxury big sofa 2-seat",
    surface: "Rp 17.000.000",
  },
  {
    id: "slide-03",
    image: HeroImg3,
    name: "Bohauss",
    description: "Luxury big sofa 2-seat",
    surface: "Rp 17.000.000",
  },
];

export const featuresData = [
  {
    id: "feature-1",
    image: FeatureOne,
    title: "High Quality",
    description: "crafted from top materials",
  },

  {
    id: "feature-2",
    image: FeatureTwo,
    title: "Warranty Protection",
    description: "Over 2 years",
  },

  {
    id: "feature-3",
    image: FeatureThree,
    title: "Free Shipping",
    description: "Order over 150 $",
  },

  {
    id: "feature-4",
    image: FeatureFour,
    title: "24/7 Support",
    description: "Dedicated support",
  },
];

export const productsData = [
  {
    id: "product-1",
    image: ProductOne,
    name: "Syltherine",
    description: "Stylish cafe chair",
    newPrice: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    promotionTag: "-30%",
  },
  {
    id: "product-2",
    image: ProductTwo,
    name: "Levoisa",
    description: "Stylish cafe chair",
    newPrice: "Rp 2.500.000",
    oldPrice: "",
    promotionTag: "",
  },

  {
    id: "product-3",
    image: ProductThree,
    name: "Lolito",
    description: "Luxury big sofa",
    newPrice: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    promotionTag: "-50%",
  },

  {
    id: "product-4",
    image: ProductFour,
    name: "Respira",
    description: "Minimalist fan",
    newPrice: "Rp 500.000",
    oldPrice: "",
    promotionTag: "New",
  },
  {
    id: "product-5",
    image: ProductFive,
    name: "Grifo",
    description: "Night lamp",
    newPrice: "Rp 1.500.000",
    oldPrice: "",
    promotionTag: "",
  },
  {
    id: "product-6",
    image: ProductSix,
    name: "Muggo",
    description: "Small mug",
    newPrice: "Rp 150.000",
    oldPrice: "",
    promotionTag: "New",
  },
];

export const images = [HeroImg1, HeroImg2, HeroImg3];
