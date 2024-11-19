import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CommonBoxLayout from "@/shared/CommonBoxLayout/CommonBoxLayout";
import Image from "next/image";

const OurAiAgent = () => {
  return (
    <CommonBoxLayout
      title="Try Our AI Agent"
      subTitle="Discover the benefits of our AI Agent - try it today and transform your customer interactions!"
    >
      <Stack className="md:!flex-row !flex-col justify-center gap-6">
        <Box className="border-[0.5px] border-[#FFFFFF26] bg-[#0000000F] rounded-lg h-[400px] w-full py-8">
          <Typography className="!font-medium text-center !text-[22px] !leading-[22px]">
            Tap the mic icon & start speaking
          </Typography>
          <Box width={270} height={270} position="relative" mx="auto">
            <Image
              src="/img/mic.gif"
              alt="mic gif"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Box width={125} height={32} position="relative" mx="auto">
            <Image
              src="/img/listening.png"
              alt="listening png"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        <Box className="border-[0.5px] border-[#FFFFFF26] bg-[#000000] rounded-lg h-[400px] w-full pt-8 px-8 bg-live-transcript-bg bg-cover bg-center">
          <Typography className="!font-medium text-center !text-[22px] !leading-[22px] ">
            Live Transcript{" "}
          </Typography>
          <Box
            height={314}
            position="relative"
            mx="auto"
            className="rounded-tl-2xl rounded-tr-2xl mt-[30px] bg-[#0A0A0A80]"
          >
            <Image
              src="/img/liveTranscript.png"
              alt="liveTranscript png"
              fill
              style={{
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </CommonBoxLayout>
  );
};

export default OurAiAgent;
