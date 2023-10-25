"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import img1 from "../../../assets/banner1.webp";
import Image from "next/image";
import { Button, Chip } from "@nextui-org/react";
import ReactRating from "react-rating";
import {
  BsDashCircleDotted,
  BsHeart,
  BsHeartFill,
  BsPlusCircleDotted,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import KbmButton from "@/components/KbmButton/KbmButton";
import Reviews from "./Reviews";
import Details from "./Details";
import SimilarProduct from "./SimilarProduct";
import KbmTitle from "@/components/KbmTitle/KbmTitle";
import ReactImageMagnify from 'react-image-magnify';

const productDetails = () => {
  const params = useParams();
  const { productId } = params.id;
  const [isLoved, setIsLoved] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 250.0;

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = (quantity * pricePerUnit).toFixed(2);

  return (
    <div className="px-[3rem]">
      <div className="grid grid-cols-2 gap-8 mb-20">
        <div>
        {/* <ReactImageMagnify
    {...{
      smallImage: {
        alt: "Wristwatch by Ted Baker London",
        isFluidWidth: true,
        src: img1.src,
        srcSet: img1.src,
        sizes: "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px"
      },
      largeImage: {
        isFluidWidth: true,
        src: img1.src,
        width: 1200,
        height: 1800
      },
      enlargedImageContainerStyle: {
        zIndex: "1"
      }
    }}
  /> */}
          <div className="border-2 flex py-8">
            <Image
              src={img1}
              alt="image"
              className="h-[20rem] w-[23rem] mx-auto"
            />
            <div className="flex-col space-y-2 my-auto pr-6">
              <Image
                src={img1}
                alt="image"
                className="h-[4rem] w-[4rem] mx-auto border p-1"
              />
              <Image
                src={img1}
                alt="image"
                className="h-[4rem] w-[4rem] mx-auto border p-1"
              />
              <Image
                src={img1}
                alt="image"
                className="h-[4rem] w-[4rem] mx-auto border p-1"
              />
            </div>
          </div>
        </div>
        <div>
          {/* Product Info */}
          <p className="text-blue-400 underline">Category</p>
          <h2 className="text-2xl font-bold">Greate Product Name Gose Heare</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <ReactRating
                initialRating={3}
                emptySymbol={<BsStar className="text-yellow-400" />}
                fullSymbol={<BsStarFill className="text-yellow-400" />}
                halfSymbol={<BsStarHalf className="text-yellow-400" />}
                // readonly // Set this to true if you want to make it read-only
              />
              <p className="ml-1 font-light text-sm">7/10</p>
            </div>
            <div className="flex items-center gap-1">
              <div
                onClick={() => {
                  setIsLoved(!isLoved);
                }}
              >
                {isLoved ? (
                  <BsHeartFill className="text-red-400" />
                ) : (
                  <BsHeart />
                )}
              </div>
              <p className="font-light text-sm">Save for latter</p>
            </div>
          </div>
          <hr className="my-2" />
          <h4 className="font-semibold text-lg">Sort description</h4>
          <ul className="list-disc">
            <li className="ml-5 font-light text-sm">Made in Russia</li>
            <li className="ml-5 font-light text-sm">Wolf latrher</li>
            <li className="ml-5 font-light text-sm">black ad dsfkash</li>
            <li className="ml-5 font-light text-sm">red id adaasfa</li>
          </ul>
          <p className="mt-2">Available Variant</p>
          <div className="flex items-center gap-2">
            <Chip
              radius="sm"
              className="border-[#427743] kbm-primary"
              variant="bordered"
            >
              Small
            </Chip>
            <Chip
              radius="sm"
              className="border-[#427743] kbm-primary"
              variant="bordered"
            >
              Medium
            </Chip>
            <Chip
              radius="sm"
              className="border-[#427743] kbm-primary"
              variant="bordered"
            >
              Large
            </Chip>
            <Chip
              radius="sm"
              className="border-[#427743] kbm-primary"
              variant="bordered"
            >
              Extra Large
            </Chip>
          </div>

          {/* price and quantity  */}
          <div className="flex items-center space-x-10 my-4">
            {/* Quantity */}
            <div className="w-29">
              <div className="bg-gray-200 rounded-full flex flex-col items-center justify-center pt-1">
                <div className="flex items-center justify-between w-full px-2">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity === 1}
                    className={`${
                      quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    <BsDashCircleDotted className=" kbm-primary w-6 h-6" />
                  </button>

                  <span className="text-xl leading-none font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={incrementQuantity}
                    className="cursor-pointer"
                  >
                    <BsPlusCircleDotted className="kbm-primary w-6 h-6" />
                  </button>
                </div>
                <p className="font-semibold text-xs text-gray-500 text-center">
                  Quantity
                </p>
              </div>
            </div>

            {/* price  */}
            <div>
              <h3 className="text-2xl font-bold">$ {totalPrice}</h3>{" "}
              {/* Display the total price */}
              <p className="font-light text-sm">BDT {totalPrice} tk</p>{" "}
              {/* Display the total price in BDT */}
            </div>
          </div>

          {/* <div className="space-x-2 mt-2">
            <Button className="kbm-bg-primary text-white">Buy Now</Button>
            <Button variant="bordered" className="border-[#427743] kbm-primary">
              Add to Cart
            </Button>
          </div> */}
          <div className="flex gap-2 mt-2 max-w-125 text-sm">
            <KbmButton />
            <KbmButton
              btnType={"kbm-solid"}
              btnText={"buy now"}
              btnIcon={<FaShoppingBag className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

      <KbmTitle title={"Product Details"} subTitle={"See Product Details"} />
      <Details />
      <KbmTitle title={"Product Reviews"} subTitle={"See Product Reviews"} />
      <Reviews />
      <KbmTitle title={"Similar Products"} subTitle={"See Similar Products"} />
      <SimilarProduct />
    </div>
  );
};

export default productDetails;
