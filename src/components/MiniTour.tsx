import React from "react";
import Header from "./Header/Header";
import Accordion from "./Accordion/Accordion";

const MiniTour = () => {
  return (
    <div className="font-segoe-u tablet:mt-10 desktop:mx-20 tablet:mx-20 tablet:p-4 drop-shadow-sm mobile:p-1 mobile:m-2">
      <Header />
      <Accordion />
    </div>
  );
};

export default MiniTour;
