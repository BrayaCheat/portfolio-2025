import Image from "next/image";
import React from "react";

type WorkCardProps = {
  image: string;
  title: string;
  role: string;
  startDate: string;
  endDate: string;
};

const WorkCard: React.FC<WorkCardProps> = ({
  image,
  title,
  role,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3">
        <Image
          src={image || ''}
          alt={image || ''}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-[14px]">{title}</p>
          <p className="text-[12px] text-zinc-500">{role}</p>
        </div>
      </div>
      <div>
        <p className="text-zinc-500 text-[12px]">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
