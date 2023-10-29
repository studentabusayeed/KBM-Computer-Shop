'use client'
import { Chip } from '@nextui-org/react';
import React from 'react';

const Variants = ({variants}) => {
  console.log(variants);
    return (
        <div>
             <div className="flex items-center gap-2">
            {  variants.map((item, index) => {
              console.log(item);
              return(  <Chip
              key={index}
              radius="sm"
              className="border-[#427743] kbm-primary"
              variant="bordered"
            >
              {item}
            </Chip>)
              })}
        
          </div>
        </div>
    );
};

export default Variants;