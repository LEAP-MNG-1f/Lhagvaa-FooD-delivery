import { Carousel } from "@/components/carousel/Carousel";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" container  max-w-[1200px]">
        <Header />
      </div>
      <Carousel />
    </div>
  );
}
