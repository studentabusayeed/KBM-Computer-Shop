import HomeBanner from "@/components/HomeComp/HomeBanner";
import SideBanner from "@/components/HomeComp/SideBanner";
import React from "react";
<<<<<<< HEAD
import CategorySection from "./CategorySection";
import KbmTitle from "../../components/KbmTitle/KbmTitle";

=======
import CategorySection from "@/components/HomeComp/CategorySection";
import SingleCategory from "@/components/HomeComp/SingleCategory";
>>>>>>> b161c93d5247361a86b95b78698592ef6c5dbfd0

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
<<<<<<< HEAD
      <section>
        <CategorySection />
      </section>
      <section>
        <KbmTitle />
      </section>
=======
      <CategorySection />
      <SingleCategory />
      <SingleCategory />
>>>>>>> b161c93d5247361a86b95b78698592ef6c5dbfd0
    </>
  );
};

export default HomePage;
