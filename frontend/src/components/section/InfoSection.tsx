import { InfoCard } from "../card/InfoCard";

export const InfoSection = () => {
  return (
    <div className="flex gap-[47px] mt-28 container max-w-[1200px]">
      <InfoCard
        Icon="InfoIcon.svg"
        title="Хүргэлтийн төлөв хянах"
        description="Захиалга бэлтгэлийн явцыг хянах"
      />
      <InfoCard
        Icon="InfoIcon1.svg"
        title="Шуурхай хүргэлт"
        description="Захиалга бэлтгэлийн явцыг хянах"
      />
      <InfoCard
        Icon="InfoIcon2.svg"
        title="Эрүүл, баталгаат орц"
        description="Захиалга бэлтгэлийн явцыг хянах"
      />
      <InfoCard
        Icon="InfoIcon.svg"
        title="Хоолны өргөн сонголт"
        description="Захиалга бэлтгэлийн явцыг хянах"
      />
    </div>
  );
};
