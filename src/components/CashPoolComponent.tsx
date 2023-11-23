/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Stack, TextField, Button } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hook"
import { formatFloatValue } from "../utils"
import { useState } from "react";
import { globalActions } from "../store/globalSlice";
import { client } from "../context/ViemContext";
import { USDT, cashPools } from "../tokens";
import { IndexTokenAbi } from "../abi/IndexTokenAbi";
import { useAccount } from "@metamask/sdk-react-ui";
import { useParams } from "react-router-dom";
import { DECIMAL_PLACES } from "../constant";
import { CashPoolAbi } from "../abi/CashPoolAbi";

const CashPoolComponent = () => {
  const {address} = useParams();
  const [poolBalance] = useAppSelector(state => [state.indexedToken.currentUserCashPoolBalance]);
  const [amount, setAmount] = useState('');
  const dispatch = useAppDispatch()
  const {address: user} = useAccount()

  const handleOnDepositClick = async () => {
    try {
      if (amount === '' || Number.isNaN(parseFloat(amount))) {
        return
      }
      const amt = parseFloat(amount) * DECIMAL_PLACES
      await client.writeContract({
        address: USDT as any,
        abi: IndexTokenAbi,
        functionName: 'approve',
        args: [cashPools[address as string], amt],
        account: user as any
      });
      const hash = await client.writeContract({
        address: cashPools[address as string] as any,
        abi: CashPoolAbi,
        functionName: 'deposit',
        args: [user as any, amt],
        account: user as any
      });
      dispatch(globalActions.setAlert({
        alert: `Txn submitted: ${hash}`,
        type: 'success'
      }))
      setAmount('')
    } catch (e) {
      dispatch(globalActions.setAlert({
        alert: 'unknown error',
        type: 'error'
      }))
    }
  }

  return (
    <div>
      <Stack direction="column" sx={{ margin: 2, padding: 2, alignItems: "center" }}>
      <Stack sx={{ backgroundColor: "#607d8b36", paddingLeft: 3, borderRadius: 3, width: "90%", textAlign: 'center' }}><Typography sx={{ fontSize: 36 }}>{formatFloatValue(poolBalance)} USDT</Typography></Stack>
      <TextField value={amount} onChange={(e) => {setAmount(e.target.value)}} sx={{ marginTop: 8, width: "90%" }} label="Amount" variant="filled" />
      <Stack direction="row" sx={{ width: "90%", justifyContent: "space-between", marginTop: 8 }}>
        <Button sx={{ width: "45%", color: "#ffffff",":hover": {color: 'blue', border: 1}, backgroundColor: "#000000" }}>Withdraw</Button>
        <Button onClick={() => {handleOnDepositClick()}} sx={{ width: "45%", color: "#ffffff",":hover": {color: 'blue', border: 1}, backgroundColor: "#000000" }}>Deposit</Button>
      </Stack>
    </Stack>
    </div>
  )
}

export default CashPoolComponent
