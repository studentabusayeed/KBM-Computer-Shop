"use client"
import React, { useState } from 'react';
import {
    BsDashCircleDotted,
    BsPlusCircleDotted,
   
  } from "react-icons/bs";
const Price = () => {

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
    );
};

export default Price;