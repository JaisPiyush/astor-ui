/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Stack, TextField, Button, InputAdornment } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hook"
import { useParams } from "react-router-dom"
import { tokensData } from "../tokens";
import { useState } from "react";
import { client } from "../context/ViemContext";
import { IndexTokenAbi } from "../abi/IndexTokenAbi";
import { useAccount } from "@metamask/sdk-react-ui";
import { globalActions } from "../store/globalSlice";
import { formatFloatValue } from "../utils";

const IndexComponent = () => {
  const {address} = useParams();
  const [indexTokenBalance, collectableIndexToken] = useAppSelector(state => [
      state.indexedToken.indexedTokenUserData.indexedTokenBalance,
      state.indexedToken.indexedTokenUserData.collectableIndexToken
    
    ]);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState('')
  const {address: user} = useAccount()

  const handleOnClickMax = () => {
    setAmount(indexTokenBalance.toString())
  }
  
  // const handleOnCollectClick = async () => {}
  const handleOnBurnClick = async () => {
    if (amount.length === 0 || Number.isNaN(parseFloat(amount))) {
      return;
    }

    const amt = parseFloat(amount);
    try {
      const hash = await client.writeContract({
        address: address as any,
        abi: IndexTokenAbi,
        functionName: 'burn',
        args: [user, amt * 1000000000000000000],
        account: user as any
      });
      dispatch(globalActions.setAlert({
        alert: `Txn submitted: ${hash}`,
        type: 'success'
      }))
    } catch (e) {
      dispatch(globalActions.setAlert({
        alert: `unknown error`,
        type: 'error'
      }))
    }
    setAmount('')
    
  }


  return (
    <Stack direction="column" sx={{ margin: 2, padding: 2, alignItems: "center" }}>
      <Stack sx={{paddingLeft: 3, borderRadius: 3, width: "90%", textAlign: 'center' }}><Typography sx={{ fontSize: 46 }}>{formatFloatValue(indexTokenBalance)} {tokensData[address as string].symbol}</Typography></Stack>
      <TextField sx={{ marginTop: 2, width: "90%" }} disabled variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">Collectable {tokensData[address as string].symbol}</InputAdornment>,
          }} value={collectableIndexToken.toFixed(2)} />
      <TextField value={amount} onChange={(e) => {setAmount(e.target.value)}} sx={{ marginTop: 2, width: "90%" }} placeholder="Amount to burn" variant="filled"
        InputProps={{
          endAdornment: <InputAdornment position="end"><Button onClick={()=> {handleOnClickMax()}}>Max</Button></InputAdornment>,
        }}
      />
      <Stack direction="row" sx={{ width: "90%", justifyContent: "space-between", marginTop: 8 }}>
        <Button sx={{ width: "45%", color: "#ffffff", ":hover": {color: 'blue', border: 1},backgroundColor: "#000000" }}>Collect</Button>
        <Button onClick={() => {handleOnBurnClick()}} sx={{ width: "45%", color: "#ffffff", ":hover": {color: 'blue', border: 1}, backgroundColor: "#000000" }}>Burn</Button>
      </Stack>
    </Stack>
  )
}

export default IndexComponent
