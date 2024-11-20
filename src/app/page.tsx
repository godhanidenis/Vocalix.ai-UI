import CustomerTrust from "@/components/customerTrust/CustomerTrust";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InnovativeTeams from "@/components/innovativeTeams/InnovativeTeams";
import OurAiAgent from "@/components/ourAiAgent/OurAiAgent";
import PricingPlans from "@/components/pricingPlans/PricingPlans";
import ScheduleADemo from "@/components/scheduleADemo/ScheduleADemo";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className="min-h-screen bg-custom-background bg-cover bg-center py-10 px-4">
        <Stack className="max-w-[1120px] mx-auto" gap={7}>
          <Header />
          <ScheduleADemo />
          <InnovativeTeams />
          <OurAiAgent />
          <CustomerTrust />
          <PricingPlans />
          <Footer />
        </Stack>
      </Box>
    </>
  );
}
