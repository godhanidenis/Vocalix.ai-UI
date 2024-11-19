import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url('/img/backGroundImage.png')",
        "live-transcript-bg": "url('/img/liveTranscriptBg.png')",
        gradient: "linear-gradient(291.9deg, #FFFFFF 62.65%, #000000 108.48%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        subTitle: "#A6A6A6",
      },
    },
  },
  plugins: [],
} satisfies Config;
