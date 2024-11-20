import React from "react";
import { Stack } from "@mui/material";
import CommonBoxLayout from "@/shared/CommonBoxLayout/CommonBoxLayout";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
  return (
    <Stack justifyContent="center">
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
