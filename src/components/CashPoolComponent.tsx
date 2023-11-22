import { Typography, Stack, TextField, Button } from "@mui/material"
const CashPoolComponent = () => {
  return (
    <div>
      <Stack direction="column" sx={{ margin: 2, padding: 2, alignItems: "center" }}>
      <Stack sx={{ backgroundColor: "#607d8b36", paddingLeft: 3, borderRadius: 3, width: "90%" }}><Typography sx={{ fontSize: 70 }}>$ 0.00</Typography></Stack>
      <TextField sx={{ marginTop: 8, width: "90%" }} label="Amount" variant="filled" />
      <Stack direction="row" sx={{ width: "90%", justifyContent: "space-between", marginTop: 8 }}>
        <Button sx={{ width: "45%", color: "#ffffff", backgroundColor: "#000000" }}>Withdraw</Button>
        <Button sx={{ width: "45%", color: "#ffffff", backgroundColor: "#000000" }}>Deposit</Button>
      </Stack>
    </Stack>
    </div>
  )
}

export default CashPoolComponent
