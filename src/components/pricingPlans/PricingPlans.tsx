import React from "react";
import Image from "next/image";
import { Box, Stack } from "@mui/material";
import CommonBoxLayout from "@/shared/CommonBoxLayout/CommonBoxLayout";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
  return (
    <Stack justifyContent="center">
      <Box width={100} height={100} position="relative" mx="auto">
        <Image
          src="/img/smile.gif"
          alt="smile gif"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <CommonBoxLayout
        title="Our Affordable Pricing Plans"
        subTitle="Explore our budget-friendly pricing plans designed to fit every need!"
      >
        <PricingCard />
      </CommonBoxLayout>
    </Stack>
  );
};

export default PricingPlans;
