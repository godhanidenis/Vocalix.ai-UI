import { Button, useTheme } from "@mui/material";
import React from "react";

interface CommonButtonProps {
  title: string;
  responsive: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  responsive = false,
}) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        padding: "12px 24px",
        border: "1px solid #FFFFFF26",
        fontWeight: 500,
        backgroundColor: "#8C45FF66",
        color: "white",
        "&:hover": {
          backgroundColor: "#8C45FFAA",
        },
        boxShadow: " 0px 0px 6px 3px #FFFFFF40 inset",
        backdropFilter: " blur(14px)",
        textTransform: "capitalize",
        ...(responsive && {
          [theme.breakpoints.down(1024)]: {
            padding: "6px 12px",
          },
        }),
        ...(responsive && {
          [theme.breakpoints.down(500)]: {
            padding: "4px 8px",
            fontSize: "12px",
          },
        }),
      }}
    >
      {title}
    </Button>
  );
};

export default CommonButton;
