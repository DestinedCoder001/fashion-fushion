"use client";
import Image from "next/image";
import { arimo, titillium } from "@/utils/fontExports";
import {
  useGetProductQuery,
  useGetSimilarQuery,
} from "@/redux/fetchData/service";
import { SimilarDataProps, SingleProductData } from "@/utils/types";
import { ScaleLoader } from "react-spinners";
import { IoBagOutline } from "react-icons/io5";
import ItemCard from "@/components/ItemCard";
import Slide from "@/components/react-slick/Slide";

interface Props {
  params: {
    product: string;
  };
}

function Product({ params: { product } }: Props) {
  const {
    data: dataList,
    isFetching,
    isError,
  } = useGetProductQuery(decodeURIComponent(product));
  const productData: SingleProductData = dataList;
  const { data: similar } = useGetSimilarQuery(
    productData?.data?.id.toString()
  );
  const similarData: SimilarDataProps = similar;
  return (
    <div className="padding min-h-screen">
      {productData?.data === null && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-[1rem] font-semibold text-blue">
            Product details could not be retrieved. Check for another product.
          </p>
        </div>
      )}
      {isFetching && (
        <div className="h-screen flex items-center justify-center">
          <ScaleLoader color={"#024e82"} />
        </div>
      )}
      {isError && (
        <div className="h-screen flex items-center justify-center">
          <p className="text-center text-[1rem] font-semibold text-red-500">
            An error occured.
          </p>
        </div>
      )}
      {productData?.data && (
        <>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-10 lg:gap-x-12 py-4">
            <div className="relative">
              {productData?.data?.gender && (
                <div className="absolute z-[700] font-bold rounded-sm px-1 top-2 left-2 text-[0.8rem] text-blue bg-blue-300">
                  {productData?.data?.gender}
                </div>
              )}
              <Slide photos={productData?.data?.images} />
            </div>
            <div>
              <h1
                className={`${titillium.className} font-semibold text-[1.5rem] lg:text-[2rem]`}
              >
                {productData?.data?.name}
              </h1>
              <p className={`${arimo.className} uppercase text-[0.9rem] my-1`}>
                {productData?.data?.brandName}
              </p>
              <div className="flex gap-x-3 items-center font-semibold text-[1.2rem]">
                <p className="line-through text-gray-300">
                  {productData?.data?.price[0].productPrice?.previous?.text}
                </p>
                <p className="text-blue">
                  {productData?.data?.price[0].productPrice?.current?.text}
                </p>
              </div>
              <p
                className="mt-4 lg:mt-7 text-[1rem] text-[#555]"
                dangerouslySetInnerHTML={{
                  __html: productData?.data?.description?.productDescription,
                }}
              ></p>
              <select className="border-2 mx-auto md:mx-0 block border-[#024e82] p-2 cursor-pointer my-4 focus:outline-none">
                {productData?.data?.variants?.map((size, i) => (
                  <option value={size.size} key={i}>
                    {size.size}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-x-3 mt-5 mx-auto md:mx-0 px-4 py-3 md:px-6 md:py-4 text-[0.8rem] text-white text-center bg-blue w-max cursor-pointer">
                <p>ADD TO CART</p>
                <IoBagOutline className="w-4 h-4" title="Bag" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p
              className="text-[#555] text-[1rem]"
              dangerouslySetInnerHTML={{
                __html: productData?.data?.description?.brandDescription,
              }}
            ></p>

            <p className="text-[0.8rem] mt-3">
              {`* ${productData?.data?.description?.careInfo}`}
            </p>

            {similarData?.data && (
              <div className="mt-10">
                <h1 className="font-semibold text-[1.5rem] md:text-[1.7rem]">
                  You might also like
                </h1>
                <div className="my-8 gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {similarData?.data?.map((item, i) => (
                    <ItemCard
                      id={item.id}
                      key={i}
                      imageUrl={item.imageUrl}
                      url={item.url}
                      name={item.name}
                      brandName={item.brandName}
                      price={item.price?.current.text}
                      prevPrice={item.price.previous?.text}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
