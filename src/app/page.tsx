import Header from "@/components/header/Header";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className="min-h-screen bg-custom-background bg-cover bg-center pt-10">
        <Box className="max-w-[1120px] mx-auto px-4">
          <Header />
        </Box>
      </Box>
    </>
  );
}
