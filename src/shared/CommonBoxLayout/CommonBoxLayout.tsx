import { Stack } from "@mui/material";
import React, { ReactNode } from "react";

interface CommonBoxLayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

const CommonBoxLayout: React.FC<CommonBoxLayoutProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <Stack className="md:gap-7 sm:gap-5 gap-4" justifyContent="center">
      <p className="lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-semibold lg:leading-[93.6px] text-center bg-gradient from-white to-black bg-clip-text text-transparent">
        {title}
      </p>

      <p className="md:text-[18px] text-base text-white opacity-70 leading-[30.6px] text-center font-normal">
        {subTitle}
      </p>
      {children}
    </Stack>
  );
};

export default CommonBoxLayout;
