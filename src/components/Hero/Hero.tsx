import React, { FC } from "react";
// const hero = require('./images/hero.png');

interface HeroProps {
  // Define props if needed
}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="font-segoe-ui justify-betweens bg-sky-950 flex pt-32 pb-16 large:px-80 desktop:pl-32 desktop:pr-28 tablet:pr-0 tablet:pl-0">
      {/* TEXT AREA */}
      <div className="text-white ml-0 desktop:whitespace-nowrap">
        <h1 className="font-semibold text-4xl mb-4 ">
          Dynamics 365 Sales capabilities
        </h1>
        <p className="mt-6 mb-4">
          Accelerate revenue with an insights-based, collaborative sales
          workspace.
        </p>
        <button className="bg-white rounded-sm font-semibold text-sm text-black pt-2 pb-2 pl-4 pr-4 mt-6">
          Watch a demo <span className='font-semibold text-lg'>›</span>
        </button>
      </div>

      {/* IMAGE AREA */}
      <div className="mx-8">
        <img
          className="w-9/12 ml-52 border-18 border-black rounded-md"
          src="https://dynamics365cdn.azureedge.net/cvt-1a67386daeb286808d54066e2057f9cd47368901eebcfdbfc9882b5029567d1b/pictures/pages/sales/capabilities/hero-device-new.jpg"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
