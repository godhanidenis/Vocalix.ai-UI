"use client";
import {
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

const Footer = () => {
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
    "Features",
    "Use Cases",
    "Agent Builder",
    "Features",
    "Pricing Plans",
  ];

  const socialMediaIcons = [
    { src: "/img/socialMedia/x.png", alt: "X logo" },
    { src: "/img/socialMedia/instagram.png", alt: "Instagram logo" },
    { src: "/img/socialMedia/youtube.png", alt: "YouTube logo" },
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
            className="cursor-pointer text-subTitle text-base leading-5 select-none"
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Stack
        className="lg:ms-0 ms-auto lg:gap-8 sm:gap-6 gap-3"
        direction="row"
      >
        {socialMediaIcons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            width={isSmallScreen ? 16 : 24}
            height={isSmallScreen ? 16 : 24}
            alt={icon.alt}
            className="cursor-pointer"
          />
        ))}
      </Stack>

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
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
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

export default Footer;
