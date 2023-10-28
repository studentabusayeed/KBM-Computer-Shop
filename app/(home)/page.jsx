import HomeBanner from "@/components/HomeComp/HomeBanner";
import SideBanner from "@/components/HomeComp/SideBanner";
import React from "react";
import CategorySection from "@/components/HomeComp/CategorySection";
import SingleCategory from "@/components/HomeComp/SingleCategory";

const HomePage = () => {
  return (
    <>
      <section className="max-w-[1280px] w-full mx-auto px-3 pt-5 pb-5 grid grid-rows-1 gap-3 grid-cols-4">
        <aside>
          <SideBanner />
        </aside>
        <aside className="col-span-3">
          <HomeBanner />
        </aside>
      </section>
      <CategorySection />
      <SingleCategory />
      <SingleCategory />
    </>
  );
};

export default HomePage;
