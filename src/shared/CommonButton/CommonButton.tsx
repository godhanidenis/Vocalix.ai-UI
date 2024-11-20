import React from "react";
import { Button } from "@mui/material";

interface CommonButtonProps {
  title: string;
  responsive?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  responsive = false,
}) => {
  return (
    <Button
      className={` !border !border-[#FFFFFF26] font-medium !bg-[#8C45FF66] !text-white hover:bg-[#8C45FFAA] shadow-[0px_0px_6px_3px_#FFFFFF40_inset] !capitalize backdrop-blur-lg  ${
        responsive
          ? "sm:!text-sm !text-xs lg:!px-6 lg:!py-3 sm:!px-3 sm:!py-1.5 !px-2 !py-1"
          : "!px-6 !py-3"
      }`}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
