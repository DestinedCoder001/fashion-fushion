import DiscoverCard from "@/components/DiscoverCard";
import plainWhiteShirt from "../assets/images/plain-white-shirt.png";
import denimJacket from "../assets/images/denim-jacket.png";
import blackPoloShirt from "../assets/images/black-polo-shirt.png";
import blueSweatShirt from "../assets/images/blue-sweatshirt.png";
import bluePlainShirt from "../assets/images/blue-plain-shirt.png";
import outCastShirt from "../assets/images/outcast-shirt.png";
import poloPlainShirt from "../assets/images/polo-plain-shirt.png";
import grayPoloShirt from "../assets/images/gray-polo-shirt.png";
import redShirt from "../assets/images/red-shirt.png";
import poloWhiteShirt from "../assets/images/polo-white-shirt.png";
import pinkCasualShirt from "../assets/images/pink-casual-shirt.png";
import darkBlueShirt from "../assets/images/dark-blue-shirt.png";
import freeShipping from "../assets/icons/free-shipping.svg";
import support247 from "../assets/icons/support247.svg";
import fingerPrint from "../assets/icons/fingerprint.svg";
import return30 from "../assets/icons/30return.svg";
import adidas from "../assets/images/adidas.png";
import northFace from "../assets/images/north-face.png";
import hilfiger from "../assets/images/hilfiger.png";
import nike from "../assets/images/nike.png";

import "./styles.css";
import Image from "next/image";
import { nunito } from "@/utils/fontExports";
import { Metadata } from "next";
import SwiperCarousel from "../components/swiper-carousel/SwiperCarousel";

export const metadata: Metadata = {
  title: "Home - FashionFusion",
  description: "FashionFusion home page",
};

export default function Home() {
  return (
    <div>

      {/* Hero section swipe carousel*/}
      <SwiperCarousel />

      {/* Discover section */}
      <div className="my-12 md:mt-16 padding">
        <h1 className="text-[2rem] text-center font-[700] ">
          Discover NEW Arrivals
        </h1>
        <h2 className="text-center my-3 text-[1.1rem] text-[#555] ">
          Recently added shirts!
        </h2>

        <div className="my-8 md:my-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 place-content-center gap-6">
          <DiscoverCard image={plainWhiteShirt} text="Plain White Shirt" />
          <DiscoverCard image={denimJacket} text="Denim Jacket " />
          <DiscoverCard image={blackPoloShirt} text="Black Polo Shirt" />
          <DiscoverCard image={blueSweatShirt} text="Blue Sweatshirt" />
          <DiscoverCard image={bluePlainShirt} text="Blue Plain Shirt" />
          <DiscoverCard image={darkBlueShirt} text="Dark Blue Shirt" />
          <DiscoverCard image={outCastShirt} text="Outcast T Shirt" />
          <DiscoverCard image={poloPlainShirt} text="Polo Plain Shirt" />
        </div>
      </div>

      <div className="padding mb-8 md:mb-16 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-10 ">
        <div className="flex gap-x-4 items-start">
          <Image
            src={freeShipping}
            alt="icon"
            width={100}
            height={100}
            className="w-7 pt-3"
            unoptimized
          />
          <div>
            <h2 className={`${nunito.className} font-[700]`}>FREE SHIPPING</h2>
            <p className="text-[#555]">
              Enjoy free shipping on all orders above $100
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <Image
            src={support247}
            alt="icon"
            width={100}
            height={100}
            className="w-7 pt-3"
            unoptimized
          />
          <div>
            <h2 className={`${nunito.className} font-[700]`}>SUPPORT 24/7</h2>
            <p className="text-[#555]">
              Our support team is there to help you for queries
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <Image
            src={return30}
            alt="icon"
            width={100}
            height={100}
            className="w-7 pt-3"
            unoptimized
          />
          <div>
            <h2 className={`${nunito.className} font-[700]`}>30 DAYS RETURN</h2>
            <p className="text-[#555]">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 items-start">
          <Image
            src={fingerPrint}
            alt="icon"
            width={100}
            height={100}
            className="w-7 pt-3"
            unoptimized
          />
          <div>
            <h2 className={`${nunito.className} font-[700]`}>
              100% PAYMENT SECURE
            </h2>
            <p className="text-[#555]">Our payments are encrypted</p>
          </div>
        </div>
      </div>
      {/* welcome banner */}
            <div className="hero-bg lg:bg-bottom px-4 md:p-[3rem] lg:p-[5rem]">
        <div className="flex flex-col-reverse md:flex-row justify-evenly gap-y-4 md:gap-y-0 md:justify-between items-center w-full h-full">
          <div className="md:w-[60%] lg:w-1/2 text-white">
            <h1 className="hidden md:block text-[1.5rem] md:text-[2.3rem] lg:text-[2.6rem] font-[600]">Fashion Fusion</h1>
            <div className="text-[1.2rem] font-semibold space-y-1">
            <p>Welcome to Fashion Fusion, the only clothing website you'll ever need.</p>
            <p>Discover millions of clothing - shoes, bags, shirts and mooore.. !!</p>
            <p>Your next piece of fashion is just a search away.</p>
            </div>
          </div>
          <div className="text-white text-center md:w-[40%] lg:w-max">
            <h1 className="leading-relaxed md:leading-normal text-[2rem] text-white uppercase font-[700] md:font-[800] tracking-wide">
              stylist picks beat <br className="hidden md:block" />
              the heat
            </h1>
            <div className="transition-all duration-[400ms] font-semibold text-[0.8rem] my-2 w-max mx-auto px-4 py-2 cursor-pointer hover:bg-white hover:text-black border-[3px] border-white">
              <p>SHOP NOW</p>
            </div>
          </div>
        </div>
      </div>
      {/* top sellers section */}
      <div className="my-12 md:mt-16 padding ">
        <h1 className="text-[2rem] text-center font-[700] ">Top Sellers</h1>
        <h2 className="text-center my-3 text-[1.1rem] text-[#555] ">
          Browse our top-selling products
        </h2>

        <div className="my-8 md:my-16 grid grid-cols-2 md:grid-cols-4 place-content-center gap-6">
          <DiscoverCard
            image={grayPoloShirt}
            text="Gray Polo Shirt"
            price="$49.00"
          />
          <DiscoverCard image={redShirt} text="Red Shirt" price="$69.00" />
          <DiscoverCard
            image={poloWhiteShirt}
            text="Polo White Shirt"
            price="$29.00"
          />
          <DiscoverCard
            image={pinkCasualShirt}
            text="Pink Casual Shirt"
            price="$39.00"
          />
        </div>
      </div>

      {/* Trending brands section */}
      <div className="padding py-4">
        <h1 className="text-[1.5rem] text-center font-[700] ">Trending Brands</h1>
        <div className="my-6 grid grid-cols-2 place-items-center gap-4 md:flex md:items-center md:justify-between">
          <div className="">
            <Image
              src={adidas}
              alt="brand logo"
              width={100}
              height={100}
              className="hover:opacity-70 transition-all"
              unoptimized
            />
          </div>
          <div className="">
            <Image
              src={hilfiger}
              alt="brand logo"
              width={100}
              height={100}
              className="hover:opacity-70 transition-all"
              unoptimized
            />
          </div>
          <div className="">
            <Image
              src={nike}
              alt="brand logo"
              width={100}
              height={100}
              className="hover:opacity-70 transition-all"
              unoptimized
            />
          </div>
          <div className="">
            <Image
              src={northFace}
              alt="brand logo"
              width={100}
              height={100}
              className="hover:opacity-70 transition-all"
              unoptimized
            />
          </div>
        </div>
      </div>

      <div className="btn-effect my-8 mx-auto px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer">
        SHOP NOW
      </div>
    </div>
  );
}
