'use client'
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function Language() {
  return (
    <div className="flex w-28 flex-wrap md:flex-nowrap gap-4">
      <Select
     placeholder="English"
        className="max-w-xs !py-0"
      >
        <SelectItem>
          English
        </SelectItem>
        <SelectItem>
          Bangla
        </SelectItem>
      </Select>
    </div>
  );
}
