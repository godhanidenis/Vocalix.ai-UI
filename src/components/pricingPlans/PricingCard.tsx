"use client";
import React, { useState } from "react";
import CommonButton from "@/shared/CommonButton/CommonButton";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

const data = [
  {
    type: "Basic",
    typeTitle: "Best for personal use.",
    price: 20,
    voiceAgents: 3,
    languageSupport: 2,
    callRecording: 5,
  },
  {
    type: "Enterprise",
    typeTitle: "For large teams & corporations.",
    price: 60,
    voiceAgents: 3,
    languageSupport: 2,
    callRecording: 5,
  },
  {
    type: "Business",
    typeTitle: "Best for business owners.",
    price: 120,
    voiceAgents: 3,
    languageSupport: 2,
    callRecording: 5,
  },
];

const FeatureItem = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <Stack
    direction="row"
    alignItems="center"
    gap={1}
    className="text-[#FFFFFFCC]"
  >
    <Icon className="!text-lg" />
    <Typography className="!text-sm">{text}</Typography>
  </Stack>
);

const PricingCard = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <Stack className="lg-900:!flex-row !flex-col lg:!gap-10 !gap-6 w-full sm:!max-w-[450px] lg-900:!max-w-full lg-900:!mx-0 sm:mx-auto select-none">
      {data?.map((item, index) => (
        <Box
          key={index}
          onClick={() => setSelectedCard(index)}
          className={`rounded-lg flex flex-col lg:gap-10 gap-6 lg:p-10 sm:p-6 p-4 !backdrop-blur-[84px] w-full cursor-pointer ${
            selectedCard === index
              ? "border gradient-border bg-pricingCard_gradient_select"
              : "border border-transparent bg-pricingCard_gradient"
          }`}
        >
          <Stack className="lg:!gap-8 !gap-4">
            <Stack className="lg:!gap-6 !gap-4">
              <Box width={40} height={40} position="relative">
                <Image
                  src={`/img/${
                    selectedCard === index ? "price-selected" : "price-select"
                  }.png`}
                  alt="price-select png"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box>
                <Typography className="!font-medium !text-xl text-white">
                  {item.type}
                </Typography>
                <Typography
                  component="span"
                  className="font-normal !text-sm text-white"
                >
                  {item.typeTitle}
                </Typography>
              </Box>
            </Stack>
            <Stack className="!flex-row !gap-3" alignItems="end">
              <Typography className="!font-medium !text-5xl text-white">
                ${item.price}
              </Typography>
              <Typography
                component="span"
                className="font-normal !text-sm !leading-6 text-white"
              >
                / per month
              </Typography>
            </Stack>
          </Stack>
          <CommonButton
            title="Get Started"
            {...(selectedCard !== index && { bgColor: "#3D3D3D66" })}
          />

          <Divider
            className={`${
              selectedCard === index ? "!bg-[#FFFFFF29]" : "!bg-[#FFFFFF3D]"
            }  `}
          />
          <Stack className="lg:!gap-6 sm:!gap-4 !gap-3">
            <Typography className="!font-medium !text-base !leading-6 text-white">
              What you will get
            </Typography>
            <FeatureItem
              icon={TaskAltOutlinedIcon}
              text={`${item.voiceAgents} Voice Agents`}
            />
            <FeatureItem
              icon={TaskAltOutlinedIcon}
              text={`${item.languageSupport} Language Support`}
            />
            <FeatureItem
              icon={TaskAltOutlinedIcon}
              text={`${item.callRecording} Mins Call Recording`}
            />
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default PricingCard;
