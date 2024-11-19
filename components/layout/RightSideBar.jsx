import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="top-0 right-0 z-20 sticky flex flex-col gap-12 max-lg:hidden py-6 pr-10 pl-6 w-[300px] xl:w-[350px] h-screen overflow-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-heading3-bold text-light-1">Sponsored</h3>
        <Image
          src="/assets/ad.jpg"
          alt="ad"
          width={280}
          height={200}
          className="rounded-lg"
        />
        <p className="text-body-bold text-light-1">Febreze Air Freshener</p>
        <p className="text-light-2 text-small-semibold">
          Instant odor fighting and a burst of freshness. Amazing summer scent.
          It is so light and fruity and if you are a scent person it has major
          happy vibes.
        </p>
      </div>
    </div>
  );
};

export default RightSideBar;