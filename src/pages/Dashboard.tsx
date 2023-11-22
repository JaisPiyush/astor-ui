import { Paper, Stack, Divider, Typography } from "@mui/material";
import { NavLink, Outlet } from 'react-router-dom';
import { Wrapper } from "../assets/wrapper/NavLinkWrapper";

function Dashboard() {
    return (
        <>
            <Stack sx={{ margin: 3, padding: 2 }}>
                <Paper elevation={3}>
                    <Stack direction="row">
                        <Stack direction="column" sx={{ width: "60%", alignItems: "center" }}>
                            <h1>part1</h1>
                        </Stack>
                        <Divider orientation="vertical" flexItem />
                        <Stack direction="column" sx={{ width: "40%", alignItems: "center" }}>
                            <Wrapper><Stack direction="row" sx={{ width: "100%", justifyContent: "space-around", padding: 0, backgroundColor: "#607d8b36", height: 50 }}>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/dashboard/index"><Typography sx={{height: "100%", fontSize: 30}}>Index</Typography></NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/dashboard/cashpool"><Typography sx={{height: "100%", fontSize: 30}}>Cash Pool</Typography></NavLink>
                            </Stack></Wrapper>
                            <Stack direction="row" sx={{ margin: 2, width: "95%", padding: 1, justifyContent: "center" }}>
                                <Paper elevation={1} sx={{ width: "100%" }}>
                                    <Outlet />
                                </Paper>
                            </Stack>
                        </Stack>

                    </Stack>
                </Paper>
            </Stack>
        </>
    )
}

export default Dashboard