import React from "react";
import { useTranslation } from 'react-i18next';
import miniTourData from "../../MiniTourData/miniTourData";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { t } = useTranslation();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const link = document.getElementById("cta-link") as HTMLAnchorElement;
    if (link) {
      link.click();
    }
  };

  return (
    // HEADER
    <header className="flex justify-between mb-6 large:ml-80 large:mr-80 desktop:mr-60 desktop:ml-60 tablet:mr-0 tablet:ml-0">
      {/* TITLE */}
      <h1
        className="tablet:text-4xl font-semibold mt-4 ml-2 mobile:text-4xl"
        aria-label={t('tourTitle')}
      >
        {t('tourTitle')}
      </h1>

      {/* CTA BUTTON */}
      <button
        className="bg-white flex text-gray-700 items-center justify-center border-2 border-black rounded cursor-pointer no-underline tablet:h-16 tablet:w-32 mt-1 hover:bg-gray-200 mobile:h-12 mobile:w-28 mobile:ml-1 mobile:mt-3 focus:outline-none focus:ring focus:ring-blue-500"
        onClick={handleButtonClick}
        aria-label={t('tourCTA')}
      >
        <a
          href={miniTourData.tourCTALink}
          target="_blank"
          rel="noreferrer"
          className="no-underline visited:text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
          id="cta-link"
        >
          <span className="tablet:text-base font-bold hover:underline mobile:text-base">
            {t('tourCTA')}
          </span>
        </a>
      </button>
    </header>
  );
};

export default Header;
