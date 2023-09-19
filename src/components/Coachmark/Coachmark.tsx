import React, { useState, useEffect } from "react";
import "./Coachmark.css";

export interface CoachmarkProps {
  coordinates: [number, number];
  onClick: () => void;
  pulse?: boolean;
}

const Coachmark: React.FC<CoachmarkProps> = ({
  coordinates,
  onClick,
  pulse = true,
}) => {
  // DETERMINE SCREENSIZE
  const [screenSize, setScreenSize] = useState<string>(() => {
    const width = window.innerWidth;
    if (width >= 1900) {
      return "xl";
    } else if (width >= 1600) {
      return "large";
    } else if (width >= 1200) {
      return "desktop";
    } else if (width >= 580) {
      return "tablet";
    } else {
      return "mobile";
    }
  });

  // DETERMINE SIZE ON SCREEN CHANGE
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1900) {
        setScreenSize("xl");
      } else if (width >= 1600) {
        setScreenSize("large");
      } else if (width >= 1200) {
        setScreenSize("desktop");
      } else if (width >= 580) {
        setScreenSize("tablet");
      } else {
        setScreenSize("mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ADJUST COACHMARK FOR SCREENSIZE
  let style: React.CSSProperties;
  const isHidden = coordinates[0] === -1 && coordinates[1] === -1;
  if (isHidden) {
    style = { visibility: "hidden" };
  } else {
    switch (screenSize) {
      case "mobile":
        style = {
          top: `${coordinates[0] - 4}%`,
          left: `${coordinates[1] - 1}%`,
        };
        break;
      case "tablet":
        style = {
          top: `${coordinates[0]}%`,
          left: `${coordinates[1]}%`,
        };
        break;
      case "desktop":
        style = {
          top: `${coordinates[0]}%`,
          left: `${coordinates[1]}%`,
        };
        break;
      case "large":
        style = {
          top: `${coordinates[0]}%`,
          left: `${coordinates[1]}%`,
        };
        break;
      case "xl":
        style = {
          top: `${coordinates[0]}%`,
          left: `${coordinates[1]}%`,
        };
        break;
      default:
        style = {
          top: `${coordinates[0]}%`,
          left: `${coordinates[1]}%`,
        };
    }
  }

  return (
    <button
      style={style}
      className={`coachmarkStyles${pulse ? " pulse" : ""}`}
      onClick={onClick}
      aria-label="Coachmark"
    ></button>
  );
};

export default Coachmark;

// localization

// analytics

// production implementation
