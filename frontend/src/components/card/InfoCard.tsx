type InfoCardType = {
  Icon: string;
  title: string;
  description: string;
};

export const InfoCard = (props: InfoCardType) => {
  return (
    <div className="p-4 w-[264px] shadow-xl flex flex-col gap-[15px] border h-[155px] rounded-2xl ">
      <img className="w-[30px] h-[30px]" src={`${props.Icon}`} alt="" />
      <div>
        <p className="font-bold text-lg">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
