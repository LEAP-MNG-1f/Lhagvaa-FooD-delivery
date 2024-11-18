type CategoryCardType = {
  img: string;
  name: string;
  price: number;
};

export const CategoryCard = (Cards: CategoryCardType) => {
  return (
    <div className="">
      <div className="">
        <img className="w-[282px] h-[186px] rounded-2xl" src={`${Cards.img}`} />
        <p className="text-[#000] font-semibold text-lg ">{Cards.name}</p>
        <p className="text-[#18BA51] font-semibold text-lg">{Cards.price}₮</p>
      </div>
    </div>
  );
};
