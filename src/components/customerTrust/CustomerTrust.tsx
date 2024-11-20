"use client";
import React, { useRef, useState } from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import CommonBoxLayout from "@/shared/CommonBoxLayout/CommonBoxLayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 850, min: 650 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
  },
};

const CustomDot = ({
  onClick = () => {},
  active = false,
}: {
  onClick?: () => void;
  active?: boolean;
}) => (
  <li
    onClick={onClick}
    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
      active ? "bg-[#8E49FF] scale-125" : "bg-[#A6A6A6]"
    }`}
  ></li>
);

const CustomerTrust = () => {
  const [value, setValue] = useState<number | null>(2);
  const carouselRef = useRef<Carousel | null>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next(1);
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(1);
    }
  };

  return (
    <Stack justifyContent="center">
      <CommonBoxLayout
        title="Our Customers Trust on Us"
        subTitle="Our customers trust us for reliable solutions and exceptional service!"
      >
        <div className="!relative">
          <Stack gap={1}>
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              customTransition="all 0.5s ease"
              itemClass="px-2"
              infinite
              ssr={true}
              arrows={false}
              pauseOnHover
              shouldResetAutoplay={false}
              showDots
              renderDotsOutside
              customDot={<CustomDot />}
              dotListClass={`justify-center items-center sm:h-[70px] h-8 gap-0.5`}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <Box
                  key={index}
                  className={`rounded-lg flex flex-col justify-center items-center lg:gap-8 sm:gap-5 gap-4 sm:py-6 sm:px-10 p-4 !backdrop-blur-[84px] bg-customers_trust_select w-full select-none`}
                >
                  <Typography className="!text-base !leading-6 text-white text-center">
                    <Box
                      width={12}
                      height={12}
                      position="relative"
                      className="mb-2"
                    >
                      <Image
                        src="/img/invertedCommas.png"
                        alt="invertedCommas png"
                        draggable="false"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    Our customer satisfaction scores have skyrocketed since we
                    implemented the AI voice agent. It handles inquiries with
                    such natural language processing that our clients feel heard
                    and valued.
                  </Typography>

                  <Rating
                    name={`simple-controlled-${index}`}
                    sx={{
                      "& .MuiRating-iconEmpty": {
                        color: "#FAAF00",
                      },
                    }}
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />

                  <Stack gap={2} direction="row" alignItems="center">
                    <Box width={40} height={40} position="relative">
                      <Image
                        src="/img/avatar.png"
                        alt="avtar png"
                        draggable="false"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Stack>
                      <Typography className="!font-medium !text-base text-white ">
                        Maddy
                      </Typography>
                      <Typography className="!font-medium !text-cs text-subTitle ">
                        Founder
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Carousel>

            <Stack justifyContent="space-between" direction="row">
              <Box
                onClick={prevSlide}
                className="ms-2 z-[9999] cursor-pointer sm:w-[70px] w-8 sm:h-[70px] h-8 bg-[#FFFFFF0D] rounded-md flex items-center justify-center hover:bg-[#ffffff2f] transition"
              >
                <ArrowBackIcon />
              </Box>

              <Box
                onClick={nextSlide}
                className="me-2 z-[9999] cursor-pointer sm:w-[70px] w-8 sm:h-[70px] h-8 bg-[#FFFFFF0D] rounded-md flex items-center justify-center hover:bg-[#ffffff2f] transition"
              >
                <ArrowForwardIcon />
              </Box>
            </Stack>
          </Stack>
        </div>
      </CommonBoxLayout>
    </Stack>
  );
};

export default CustomerTrust;
