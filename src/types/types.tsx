type TourStep = {
    header: string;
    description: string;
    coordinates: [number, number];
    img: string;
    optionalLinkTitle: string;
    optionalLinkAddress: string;
  };
  
  type TourSection = {
    foldTitle: string;
    steps: TourStep[];
  };
  
  type MiniTourData = {
    tourTitle: string;
    tourCTA: string;
    tourCTALink: string;
    sections: TourSection[];
  };
  
  export type { TourStep, TourSection, MiniTourData };