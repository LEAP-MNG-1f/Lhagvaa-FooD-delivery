"use client";

import { Carousel } from "@/components/carousel/Carousel";

import { SaleMealsSection } from "@/components/section/SaleMealsSection";
import { InfoSection } from "@/components/section/InfoSection";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Carousel />
      <InfoSection />
      <SaleMealsSection />
    </div>
  );
}
 