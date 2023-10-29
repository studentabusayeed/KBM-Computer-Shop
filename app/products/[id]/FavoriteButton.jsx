"use client"
import React, { useState } from 'react';
import {
  BsHeart,
  BsHeartFill
} from "react-icons/bs";
const FavoriteButton = () => {

    
  const [isLoved, setIsLoved] = useState(false);
    return (
                   
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
    );
};

export default FavoriteButton;