import { PineconeLogoWhite } from "../icons/PineconeLogoWhite";

export const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(Background.svg)` }}
      className="bg-[#18BA51] mt-28 w-screen h-[545px] flex items-center justify-center "
    >
      <div className="w-[1200px]  flex flex-col items-center gap-10 ">
        <div className="flex gap-2 ">
          <PineconeLogoWhite />
          <p className="text-[#fff] font-bold text-xl">Food Delivery</p>
        </div>
        <div className="flex text-[#fff] font-[590px] justify-between w-[1200px]">
          <p>Нүүр</p>
          <p>Холбоо барих</p>
          <p>Хоолны цэс</p>
          <p>Үйлчилгээний нөхцөл</p>
          <p>Хүргэлтийн бүс</p>
          <p>Нууцлалын бодлого</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
