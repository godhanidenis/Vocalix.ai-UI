import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className="min-h-screen bg-custom-background bg-cover bg-center py-10 px-4">
        <Stack className="max-w-[1120px] mx-auto" gap={2}>
          <Header />
          <Footer />
        </Stack>
      </Box>
    </>
  );
}
