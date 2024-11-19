import React from "react";
import Image from "next/image";
import { Box, Stack } from "@mui/material";
import CommonBoxLayout from "@/shared/CommonBoxLayout/CommonBoxLayout";
import CommonButton from "@/shared/CommonButton/CommonButton";

const ScheduleADemo = () => {
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
        title="Supercharge your Call Operations with Voice AI"
        subTitle="Our GenAI-powered voicebot calls your website visitors, qualifies your leads, and ensures you engage only with high-quality prospects, boosting your business efficiency and success."
      >
        <Box className="flex justify-center">
          <CommonButton title="Schedule a Demo" />
        </Box>
      </CommonBoxLayout>
    </Stack>
  );
};

export default ScheduleADemo;
