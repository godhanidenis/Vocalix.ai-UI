import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg-900": "900px", // Adding custom breakpoint
      },
      backgroundImage: {
        "custom-background": "url('/img/backGroundImage.png')",
        "live-transcript-bg": "url('/img/liveTranscriptBg.png')",
        gradient: "linear-gradient(291.9deg, #FFFFFF 62.65%, #000000 108.48%)",
        pricingCard_gradient:
          "linear-gradient(180deg, rgba(37, 37, 37, 0.4) 0%, rgba(15, 15, 15, 0.4) 100%)",

        pricingCard_gradient_select:
          "linear-gradient(180deg, rgba(132, 55, 255, 0.14) 0%, rgba(142, 73, 255, 0) 50%, rgba(142, 73, 255, 0.1) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subTitle: "#A6A6A6",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".gradient-border": {
          "border-image-source":
            "linear-gradient(180deg, rgba(140, 69, 255, 0.12) 0%, rgba(142, 73, 255, 0.27) 50%, rgba(171, 120, 255, 0.3) 100%)",
          "border-image-slice": "1",
          "border-radius": "0.5rem",
        },
      });
    },
  ],
} satisfies Config;
