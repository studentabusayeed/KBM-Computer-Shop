"use client"
import React from 'react';
import ReactRating from "react-rating";
import {
    BsStar,
    BsStarFill,
    BsStarHalf,
  } from "react-icons/bs";
const Rating = () => {
    return (
        <div>
              <ReactRating
                initialRating={3}
                emptySymbol={<BsStar className="text-yellow-400" />}
                fullSymbol={<BsStarFill className="text-yellow-400" />}
                halfSymbol={<BsStarHalf className="text-yellow-400" />}
                // readonly // Set this to true if you want to make it read-only
              />
        </div>
    );
};

export default Rating;