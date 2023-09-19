import { MiniTourData } from "../types/types";

const supportedLocalesForImages = ["en-us", "fr-fr"];

function extractLocaleFromUrl(): string | null {
  if (typeof window === 'undefined') {
      return null;
  }
  const matches = window.location.pathname.match(/^\/(en-us|fr-fr)/i);
  // console.log("Extracted locale:", matches ? matches[1] : "No match");
  return matches ? matches[1].toLowerCase() : null;
}

function getLocalizedImage(imageName: string): string {
  let locale = extractLocaleFromUrl() || "en-us"; // Use the extracted value, fallback to 'en-us'

  if (!supportedLocalesForImages.includes(locale)) {
    locale = "en-us"; // fallback to default locale
  }

  return require(`../images/${locale}/${imageName}.png`);
}

const miniTourData: MiniTourData = {
  tourTitle: "Capabilities",
  tourCTA: "Try for free",
  tourCTALink: "https://guided-tour.azurewebsites.net/en-US/guidedtour/landing",
  sections: [
    {
      foldTitle: "Win new customers through teamwork",
      steps: [
        {
          header: "Connect through hybrid selling",
          description:
            "Connect sellers with customers through their preferred communication channels with Microsoft Teams and Dynamics 365 Sales.",
          coordinates: [28, 13],
          img: getLocalizedImage("1_1"),
          optionalLinkTitle: "Learn More",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Replace intuition with insights",
          description:
            "Streamline sales cycles through suggested next best actions, focusing on the highest-priority activity with the best propensity to close.",
          coordinates: [9, 24],
          img: getLocalizedImage("1_2"),
          optionalLinkTitle: "",
          optionalLinkAddress: "",
        },
        {
          header: "Gain visibility across the entire sales cycle",
          description:
            "Analyze individual and collective pipelines for accurate forecasts through automated insights.",
          coordinates: [17, 88],
          img: getLocalizedImage("1_3"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress: "",
        },
        {
          header: "Enable guided selling with in-the-moment insights",
          description:
            "Coach sellers with real-time insights about customer emotion, competitive market, sentiment, and priorities in phone calls.",
          coordinates: [80, 6],
          img: getLocalizedImage("1_4"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
      ],
    },
    {
      foldTitle: "Accelerate revenue with AI",
      steps: [
        {
          header: "Enhance intuition with insights",
          description:
            "Streamline sales cycles through suggested next best actions, focusing on the highest-priority activity with the best propensity to close.",
          coordinates: [18, 40],
          img: getLocalizedImage("2_1"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Take action seamlessly",
          description:
            "Take the suggested actions right from the dashboard with a prioritized worklist.",
          coordinates: [16.5, 33],
          img: getLocalizedImage("2_2"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Get notified about deal risks",
          description:
            "Help increase closure rates with notifications about when deals are at risk.",
          coordinates: [46, 10],
          img: getLocalizedImage("2_3"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Improve account relationships",
          description:
            "Receive recommendations to help improve account relationships at risk",
          coordinates: [79, 6],
          img: getLocalizedImage("2_4"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
      ],
    },
    {
      foldTitle: "Predict and manage pipelines with confidence",
      steps: [
        {
          header: "Gain visibility across the entire sales cycle",
          description:
            "Analyze individual and collective pipelines for accurate forecasts through automated insights.",
          coordinates: [-1, -1],
          img: getLocalizedImage("3_1"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Spotlight potential strengths and weaknesses",
          description:
            "Predict revenue fluctuations and highlight areas of focus from top to bottom of the funnel.",
          coordinates: [25, 15],
          img: getLocalizedImage("3_2"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Focus on what matters",
          description:
            "Reduce time spent on reporting by surfacing exceptions using built-in reports.",
          coordinates: [16, 64],
          img: getLocalizedImage("3_3"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
      ],
    },
    {
      foldTitle: "Improve customer conversations through real-time coaching",
      steps: [
        {
          header: "Enable guided selling with in-the-moment insights",
          description:
            "Coach sellers with real-time conversation intelligence about customer emotion, competitive market, sentiment, and priorities in phone calls.",
          coordinates: [47, 7],
          img: getLocalizedImage("4_1"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Make the sales journey more straightfoward for sellers",
          description:
            "Build consecutive sales journeys that remove the guesswork around next steps, accrue to business goals, and are easily measurable.",
          coordinates: [57, 21.5],
          img: getLocalizedImage("4_2"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
        {
          header: "Quickly train new sellers",
          description:
            "Help them learn what drives success by reviewing actions that previous sellers took as a result of feedback during sales calls.",
          coordinates: [57, 15],
          img: getLocalizedImage("4_1"),
          optionalLinkTitle: "This is a optional link!",
          optionalLinkAddress:
            "https://dynamics.microsoft.com/en-us/sales/capabilities/",
        },
      ],
    },
  ],
};

export default miniTourData;
