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
        <div className="flex items-center justify-center gap-[18px]">
          <img className="w-[40px] h-[40px]" src="facebook.png" alt="" />
          <img className="w-[40px] h-[40px]" src="instagram.png" alt="" />
          <img className="w-[40px] h-[40px]" src="twitter.png" alt="" />
        </div>
        <div className="border-b w-[1200px]"></div>
        <div className="flex flex-col items-center justify-center text-[#FFF]">
          <p>© 2024 Pinecone Foods LLC </p>
          <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
};
