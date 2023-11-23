/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper, Stack, Divider, Typography, Box } from "@mui/material";
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Wrapper } from "../assets/wrapper/NavLinkWrapper";
import DashboardTableComponent from "../components/DashboardTableComponent";
import { tokensData } from "../tokens";
import { globalActions } from "../store/globalSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect} from "react";
import { fetchIndexedTokenData, fetchIndexedTokenUserData } from "../store/indexedTokenSlice";
import { useAccount } from "@metamask/sdk-react-ui";


function Dashboard() {
    const {address} = useParams();
    const [tokens, indexPrice] = useAppSelector(state => [state.indexedToken.tokens, state.indexedToken.indexPrice]);
    const dispatch = useAppDispatch();
    const {address: user} = useAccount()
    useEffect(() => {
        if (user) {
            dispatch(fetchIndexedTokenData(address as string));
            dispatch(fetchIndexedTokenUserData({token: address as string, account: user as string}));
        }
    }, [user])

    const handleOnClick = () => {
        navigator.clipboard.writeText(address as string);
        dispatch(globalActions.setAlert({
          alert: `${tokensData[address as string].symbol} address copied`,
          type: 'success'
        }))
      }
    return (
        <Box sx={{width: '100%', height: '91.5vh', backgroundColor: "#000000"}}>
            <Stack sx={{ margin: 3, padding: 2, mt:0, pt:4  }}>
                <Paper elevation={3} sx={{backgroundColor: "#000000"}}>
                    <Stack direction="row">
                        <Stack direction="column" sx={{ width: "60%", alignItems: "center" }}>
                            <Stack onClick={() => {handleOnClick()}} sx={{ height: 70, width: "100%", backgroundColor: "white", alignItems: "left", pl: 2, pt: 2}}>
                                <Typography sx={{ height: "100%", fontSize: 30 }}>
                                    {`${tokensData[address as string].name} ($${indexPrice.toFixed(2)})`}
                                </Typography>
                            </Stack>
                            <DashboardTableComponent tokens={tokens} />
                        </Stack>
                        <Divider orientation="vertical" flexItem />
                        <Stack direction="column" sx={{ width: "30%", alignItems: "center", ml: '5%', backgroundColor: "#e3e3e3", }}>
                            <Wrapper>
                            <Stack direction="row" sx={{ width: "100%", justifyContent: "space-around", padding: 0, backgroundColor: "#e3e3e3", height: 50 }}>
                                <NavLink className={({ isActive }) => (!isActive ? 'nav-link-active' : 'nav-link')} to={`/${address}/index`}><Typography sx={{ height: "100%", fontSize: 30 }}>Index</Typography></NavLink>
                                <NavLink className={({ isActive }) => (!isActive ? 'nav-link-active' : 'nav-link')} to={`/${address}/cashpool`}><Typography sx={{ height: "100%", fontSize: 30 }}>Cash Pool</Typography></NavLink>
                            </Stack>
                            </Wrapper>
                            <Stack direction="row" sx={{ margin: 2, width: "95%", padding: 1, justifyContent: "center" }}>
                                <Paper elevation={1} sx={{ width: "100%" }}>
                                    <Outlet />
                                </Paper>
                            </Stack>
                        </Stack>

                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}

export default Dashboard