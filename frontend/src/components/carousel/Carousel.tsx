export const Carousel = () => {
  return (
    <div
      style={{ backgroundImage: `url(Background.svg)` }}
      className=" bg-[#18BA51] flex items-center justify-center w-screen h-[788px] "
    >
      <div className="w-[1200px] flex gap-[225px] items-center ">
        <div className="flex flex-col ">
          <span className="text-[#fff] w-[384px]  pb-6 font-semibold border-b leading-[49.5px] text-[55px]">
            Pinecone Food Delivery
          </span>
          <span className="text-[22px] pt-6 w-[384px] text-[#fff]">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </span>
        </div>
        <div className="relative">
          <img className="w-[443px] h-[438px] " src="Carousel1.png" alt="" />
          <img
            className="w-[313px] bottom-0 -right-[34%] absolute h-[313px]"
            src="Carousel.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
