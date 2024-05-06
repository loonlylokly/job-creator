import localFont from "next/font/local";

export const WorkSans = localFont({
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: false,
  src: [
    {
      path: "../../../../public/fonts/Work_Sans/WorkSans-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/Work_Sans/WorkSans-SemiBold.woff2",
      style: "normal",
      weight: "600",
    },
  ],
  variable: "--font-work-sans",
});
