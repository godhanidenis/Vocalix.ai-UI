"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  { src: "/img/innovativeTeams/acme.png", alt: "acme png" },
  { src: "/img/innovativeTeams/celestial.png", alt: "celestial png" },
  { src: "/img/innovativeTeams/pulse.png", alt: "pulse png" },
  { src: "/img/innovativeTeams/quanTrum.png", alt: "quanTrum png" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 630 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 630, min: 430 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
  },
};

const InnovativeTeams = () => {
  return (
    <Stack className="md:gap-7 sm:gap-5 gap-4" justifyContent="center">
      <Typography className="!text-base !leading-[26px] !text-subTitle text-center">
        Trusted by top innovative teams:
      </Typography>

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        arrows={false}
        showDots={false}
        customTransition="all 0.5s ease"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        infinite
        pauseOnHover
        autoPlay
        shouldResetAutoplay={false}
        ssr={true}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            height={30}
            position="relative"
            width="auto"
            className="!select-none cursor-grab "
          >
            <Image
              src={image.src}
              alt={image.alt}
              draggable="false"
              fill
              style={{
                objectFit: "contain",
              }}
              className="opacity-60"
            />
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
};

export default InnovativeTeams;
