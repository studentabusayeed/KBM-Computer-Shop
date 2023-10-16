'use client'

import { Select, SelectItem } from '@nextui-org/react';

const ShowOrderList = () => {

   const items = [
    {
        value: "Last 5 orders"
    },
    {
        value: "Last 10 orders"
    },
    {
        value: "Last 7 days"
    },
    {
        value: "Last 15 days"
    },
    {
        value: "Last 30 days"
    },
   ]
    return (
        <Select
        items={items}
        placeholder="Last 5 orders"
        className="text-center min-w-[10rem]"
      >
        {items.map((item) => <SelectItem key={item.value}>{item.value}</SelectItem>)}
      </Select>
    );
};

export default ShowOrderList;