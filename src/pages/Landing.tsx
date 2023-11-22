import {Stack } from "@mui/material"
import LandingTableCompoenent from "../components/LandingTableComponent"



function Landing() {
  return (
    <Stack sx={{ width: "100%", height: "100%", padding: 3, backgroundColor: "#607d8b36" }}>
      <Stack sx={{ padding: 2, width: "100%", height: "100%" }}>
        <LandingTableCompoenent />
      </Stack>
    </Stack>
  )
}

export default Landing