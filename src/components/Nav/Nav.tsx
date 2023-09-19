import React, { FC } from "react";

interface NavProps {
  // Define props if needed
}

const Nav: FC<NavProps> = () => {
  return (
    <div className="font-segoe-ui pt-4 large:pl-80 large:pr-80 desktop:pr-0 desktop:pl-0 tablet:pr-0 tablet:pl-0 flex flex-col">
      {/* TOP BAR */}
      <div className="flex justify-center mt-4 pb-4 border-b border-gray-300">
        {/* LOGO */}
        <div className="w-100 px-4">
          <img
            className="w-28"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            alt="logo"
          ></img>
        </div>

        {/* SEPERATOR */}
        <div className="text-2xl -mt-1 mr-4">|</div>

        {/* BRAND */}
        <div>
          <h1 className="font-semibold text-lg mr-4">Dynamics 365</h1>
        </div>

        {/* MENU */}
        <div className="flex">
          {/* SECTIONS */}
          <div className="">
            <ul className="flex">
              <li className="pl-2 pr-4 text-sm">
                Products <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm">
                Solutions <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm">
                Pricing <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm ">
                Partners <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm ">
                Partners <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm ">
                Platform <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm ">
                Resources <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm ">
                Support <span className="text-xl">⌄</span>
              </li>
              <li className="pr-4 text-sm mt-1.5">Community</li>
            </ul>
          </div>

          {/* SIGN IN / GET STARTED */}
          <div className="flex pl-20">
            <div className="text-sm mt-1">
              <button>Sign In</button>
            </div>
            <div className="pl-5 font-semibold -mt-2">
              <button className="border-2 border-grey rounded p-2 pl-2 pr-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex mt-6 pl-28 pb-4 justify-between items-center">
        {/* SUB NAV */}
        <div className="flex">
          {/* PRODUCT */}
          <div>
            <h1 className="font-semibold text-lg pr-4">Sales</h1>
          </div>

          {/* SUB MENU */}
          <div className="flex">
            <ul className="flex">
              <li className="pr-4 text-sm mt-1">Capabilities</li>
              <li className="pr-4 text-sm mt-1">Resources</li>
              <li className="pr-4 text-sm mt-1">Pricing</li>
            </ul>
          </div>

          {/* TRY FOR FREE */}
          <div className="">
            <button className="justify-end border-2 border-grey rounded p-2 pl-2 pr-2 -mt-3 font-semibold">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
