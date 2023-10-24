"use client"
import {Input} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";


const Search = () => {

  const handleSearch = (e) => {
    const searchItem = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

    return (
        <div className="relative w-2/4">
       <Input
        isClearable
        radius="lg"
        classNames={{
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <FaSearch className="text-[green] pointer-events-none flex-shrink-0" />
        }
      />
    </div>
    );
};

export default Search;