
import React from "react";
// import KbmTitle from "@/components/KbmTitle/KbmTitle";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import Reviews from "./Reviews";
import Details from "./Details";
import SimilarProduct from "./SimilarProduct";
import KbmButton from "@/components/Utilities/KbmButton/KbmButton";
import KbmTitle from "@/components/Utilities/KbmTitle/KbmTitle";
import img1 from "../../../assets/banner1.webp";
{// import {
//   Magnifier,
//   GlassMagnifier,
//   SideBySideMagnifier,
//   PictureInPictureMagnifier,
//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION
// } from "react-image-magnifiers";
}
import loadProductsData from "../../../utils/loadProductsData";
import Price from "./Price";
import Rating from "./Rating";
import FavoriteButton from './FavoriteButton';
import Variants from "./Variants";

const productDetails = async () => {
  // const params = useParams();
  // const { productId } = params.id;
  const products = await loadProductsData()

  const totalPrice = 120;
  console.log('57 ====>', products);
  console.log('57 ====>', products?.variables[0].values);
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
          <p className="text-blue-400 underline">{products?.category_name}</p>
          <h2 className="text-2xl font-bold">{products?.basic_information.name}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
            <Rating/>
              <p className="ml-1 font-light text-sm">7/10</p>
            </div>
            <div className="flex items-center gap-1">
              <FavoriteButton/>
              <p className="font-light text-sm">Save for latter</p>
            </div>
          </div>
          <hr className="my-2" />
          <h4 className="font-semibold text-lg">Short description</h4>
          <ul className="list-disc">
            {/* <li className="ml-5 font-light text-sm">Made in Russia</li>
            <li className="ml-5 font-light text-sm">Wolf latrher</li>
            <li className="ml-5 font-light text-sm">black ad dsfkash</li>
            <li className="ml-5 font-light text-sm">red id adaasfa</li> */}
                <div>
      {Object.entries(products?.specification).map(([key, value]) => (
         
         <li key={key} className="ml-5 font-light text-sm">{key.split("_").join(" ")}: {value}</li>
          
      ))}
    </div>

          </ul>
          <p className="mt-2">Available Variant</p>
         <Variants variants={products?.variables[0].values}/>

          {/* price and quantity  */}
          <div className="flex items-center space-x-10 my-4">
            {/* Quantity */}
            <div className="w-29">
              <div className="bg-gray-200 rounded-full flex flex-col items-center justify-center pt-1">
               <Price/>
                <p className="font-semibold text-xs text-gray-500 text-center">
                  Quantity
                </p>
              </div>
            </div>

            {/* price  */}
            <div>
              <h3 className="text-2xl font-bold">$ {products?.single_product.price.regular_price}</h3>{" "}
              {/* Display the total price */}
              <p className="font-light text-sm">BDT {products?.single_product.price.regular_price} tk</p>{" "}
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
