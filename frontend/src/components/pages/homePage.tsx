"use client";

import { Carousel } from "@/components/carousel/Carousel";

import { SaleMealsSection } from "@/components/section/SaleMealsSection";
import { InfoSection } from "@/components/section/InfoSection";

const HomePage = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Carousel />
      <InfoSection />
      <SaleMealsSection />
    </div>
  );
};

export default HomePage;
