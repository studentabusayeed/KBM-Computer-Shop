import { Progress } from "@nextui-org/react";
import ReviewCard from "./ReviewCard";
import { BsStarFill } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-10 mb-20">
      {/* Overall rating */}
      <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
        <div className="flex gap-10 min-w-[100px] justify-center mt-8 md:mt-0">
            {/* left side Progress section  */}
          <div className="flex flex-col gap-2 w-full max-w-md">
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">5</p>
                <BsStarFill className="text-slate-300 text-md" />
              </div>
              <Progress
                color="success"
                aria-label="Loading..."
                className="h-[4px]"
                value={90}
              />
              <p>90</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">4</p>
                <BsStarFill className="text-slate-300 text-md" />
              </div>
              <Progress
                color="primary"
                aria-label="Loading..."
                className="h-[4px]"
                value={40}
              />
              <p>40</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">3</p>
                <BsStarFill className="text-slate-300 text-md" />
              </div>
              <Progress
                color="secondary"
                aria-label="Loading..."
                className="h-[4px]"
                value={70}
              />
              <p>70</p>
            </div>
          </div>

            {/* Circle section */}
          <div className="transition-all shrink-1 relative max-h-[100px] max-w-[100px]">
            {/* SVG code for the circle */}
            <svg
              className="h-full w-full origin-center -rotate-90 transform"
              viewBox="0 0 100 100"
            >
              <circle
                fill="none"
                cx="50"
                cy="50"
                r="46"
                strokeWidth="3"
                strokeLinecap="round"
                stroke="#427743"
                className="w-[100px] text-gray-4"
              ></circle>
              <circle
                fill="none"
                cx="50"
                cy="50"
                r="46"
                strokeWidth="3"
                strokeLinecap="round"
                stroke="#69b46b"
                className="cursor-pointer text-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                // strokeDasharray={`${dashArray} ${circumference}`}
                strokeDashoffset="0"
                data-difficulty="ALL"
              ></circle>
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default text-center">
              <div>
                <div className="text-3xl font-medium kbm-primary">{0}</div>
              </div>
            </div>
          </div>

            

          {/* Right side progress Section  */}
        <div className="flex flex-col gap-2 w-full max-w-md">
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">2</p>
                <BsStarFill className="text-slate-300 text-md" />
              </div>
              <Progress
                color="warning"
                aria-label="Loading..."
                className="h-[4px]"
                value={30}
              />
              <p>30</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">1</p>
                <BsStarFill className="text-slate-300 text-md" />
              </div>
              <Progress
                color="danger"
                aria-label="Loading..."
                className="h-[4px]"
                value={5}
              />
              <p>5</p>
            </div>
            {/* progress bar */}
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-1 items-center justify-between">
                <p className="font-medium">0</p>
                <BsStarFill className="text-slate-300 text-md" />
              </div>
              <Progress
                color="default"
                aria-label="Loading..."
                className="h-[4px]"
                value={2}
              />
              <p>2</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Individual reviews */}
      <div className="">
        <ReviewCard
          name="John Doe"
          rating={4}
          date="Jan 12, 2023"
          verified={true}
          review="This product is amazing! I love it!"
          likes={12}
          dislikes={2}
          profilePicture="URL_TO_JOHN_DOE_PROFILE_PICTURE"
        />
      </div>
      {/* Individual reviews */}
      <div className="">
        <ReviewCard
          name="Imam Hossien"
          rating={5}
          date="Jan 12, 2023"
          verified={true}
          review="This product is amazing! I love it!"
          likes={7}
          dislikes={4}
          profilePicture="URL_TO_JOHN_DOE_PROFILE_PICTURE"
        />
      </div>

    </div>
  );
};

export default Reviews;
