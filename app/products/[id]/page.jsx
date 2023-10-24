"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import img1 from "../../../assets/banner1.webp";
import Image from "next/image";
import { Button, Chip } from "@nextui-org/react";
import ReactRating from "react-rating";
import {
  BsHeart,
  BsHeartFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Magnifier } from "react-image-magnifiers";

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
      <div className="grid grid-cols-2 gap-8">
        <div>
        {/* <Magnifier
        imageSrc="./banner6.png"
        imageAlt="Image Alt Text"
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
            <div>
              <h3 className="text-2xl font-bold">$ {totalPrice}</h3>{" "}
              {/* Display the total price */}
              <p className="font-light text-sm">BDT {totalPrice} tk</p>{" "}
              {/* Display the total price in BDT */}
            </div>
            <div className="w-24 aspect-w-16 aspect-h-9">
              <div className="bg-gray-200 rounded-full flex flex-col items-center justify-center aspect-content">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity === 1}
                    className={`px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 ${
                      quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    <FaMinus className="text-lg kbm-primary" />
                  </button>

                  <span className="text-xl font-semibold">{quantity}</span>

                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"
                  >
                    <FaPlus className="text-lg kbm-primary" />
                  </button>
                </div>
                <p className="font-light text-sm text-gray-500 text-center">
                  Quantity
                </p>
              </div>
            </div>
          </div>

          <div className="space-x-2 mt-2">
            <Button className="kbm-bg-primary text-white">Buy Now</Button>
            <Button variant="bordered" className="border-[#427743] kbm-primary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default productDetails;
