import { Box, Stack } from "@mui/material";
import LandingTableComponent from "../components/LandingTableComponent";

function Landing() {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "91vh",
        padding: 3,
        backgroundColor: "#000000",
        
      }}
    >
      <Box sx={{ padding: 2, width: "100%", height: "100%", display: 'flex',
        justifyContent: 'center' }}>
        <LandingTableComponent />
      </Box>
    </Stack>
  );
}

export default Landing;
