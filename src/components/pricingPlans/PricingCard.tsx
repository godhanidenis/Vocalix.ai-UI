import CommonButton from "@/shared/CommonButton/CommonButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const data = [
  {
    type: "Basic",
    typeTitle: "Best for personal use.",
    price: 20,
    getInfo: [3, 2, 5],
  },
  {
    type: "Enterprise",
    typeTitle: "For large teams & corporations.",
    price: 60,
    getInfo: [3, 2, 5],
  },
  {
    type: "Business",
    typeTitle: "Best for business owners.",
    price: 120,
    getInfo: [3, 2, 5],
  },
];
const PricingCard = () => {
  return (
    <Stack className="md:!flex-row !flex-col !gap-10">
      {data?.map((item, index) => (
        <Box
          key={index}
          className="rounded-lg flex flex-col gap-10 p-10 bg-pricingCard_gradient !backdrop-blur-[84px] w-full"
        >
          <Stack className="!gap-8">
            <Stack className="!gap-6">
              <Box width={40} height={40} position="relative">
                <Image
                  src="/img/price-select.png"
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
          <CommonButton title="Get Started" />
        </Box>
      ))}
    </Stack>
  );
};

export default PricingCard;
