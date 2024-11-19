"use client";
import CommonButton from "@/shared/CommonButton/CommonButton";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

import ReorderIcon from "@mui/icons-material/Reorder";

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(500));
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    "AI Agent",
    "Use Cases",
    "Agent Builder",
    "Features",
    "Pricing Plans",
  ];

  return (
    <div className="flex lg:justify-between items-center lg:gap-8 sm:gap-4 gap-2">
      <Image
        src="/img/logo.png"
        width={isSmallScreen ? 110 : 190}
        height={isSmallScreen ? 22 : 34}
        alt="logo picture"
      />
      <Stack
        direction="row"
        alignItems="center"
        gap={3}
        className="bg-[#18181B80] rounded-lg py-[18px] px-8 lg:!flex !hidden"
      >
        {menuItems?.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            component="span"
            className="cursor-pointer !text-subTitle !text-base !leading-5 select-none"
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Box className="lg:ms-0 ms-auto ">
        <CommonButton title="Schedule a Demo" responsive={true} />
      </Box>
      <IconButton
        sx={{
          backgroundColor: "#18181B80",
          color: "white",
          borderRadius: "8px",
          px: "24px",
          [theme.breakpoints.down(500)]: {
            px: "8px",
          },
          "&:hover": {
            backgroundColor: "#3A3A3A",
            color: "#FFD700",
          },
        }}
        className="lg:!hidden"
        onClick={handleMenuClick}
      >
        <ReorderIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#18181B",
              color: "white",
              borderRadius: "8px",
              px: "8px",
              py: "4px",
              width: "170px",
            },
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleMenuClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Header;
