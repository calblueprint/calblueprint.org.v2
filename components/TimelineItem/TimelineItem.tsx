import React, { ReactNode } from 'react';

interface TimelineItemProps {
  num: string;
  title: string;
  date?: string;
  description: string | ReactNode;
  additionalInfo?: string | ReactNode;
  last?: boolean;
  className?: string;
}

export default function TimelineItem({
  num,
  title,
  date,
  description,
  additionalInfo,
  last = false,
  className = '',
}: TimelineItemProps) {
  return (
    <div className={`flex flex-row flex-wrap overflow-hidden ${className}`}>
      <div
        className={`py-[10px] px-0 relative text-center w-[100px] sm:w-[200px] ${last ? 'after:hidden' : "after:bg-bp-blue/40 after:content-[''] after:h-full after:absolute after:-top-[20px] after:w-[1px]"}`}
      >
        <div className="bg-off-white text-bp-blue/20 font-bptext text-[50px] sm:text-[100px] font-semibold relative -top-[20px] -left-[20px] sm:-left-[40px] sm:-top-[40px] z-[1]">
          {num}
        </div>
      </div>
      <div className="float-right py-[10px] pr-[10px] ml-auto sm:m-0 sm:px-0 w-[calc(100%-120px)] sm:w-[calc(100%-200px)]">
        <div className="inline-block font-bptext text-[27px] font-semibold mr-[15px] mb-[5px] sm:mb-[15px]">
          {title}
        </div>
        {date && (
          <div className="text-dark-gray/60 inline-block font-bptext text-[19px] font-medium mb-[10px] sm:m-0">
            {date}
          </div>
        )}
        <div className="text-dark-gray/70 text-[18px]">{description}</div>
        {additionalInfo}
      </div>
    </div>
  );
}
