import { Paper, Stack, Divider, Typography, Box } from "@mui/material";
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Wrapper } from "../assets/wrapper/NavLinkWrapper";
import DashboardTableComponent from "../components/DashboardTableComponent";


function Dashboard() {
    const {address} = useParams();
    return (
        <Box sx={{width: '100%', height: '91.5vh', backgroundColor: "#000000"}}>
            <Stack sx={{ margin: 3, padding: 2, mt:0, pt:4  }}>
                <Paper elevation={3} sx={{backgroundColor: "#000000"}}>
                    <Stack direction="row">
                        <Stack direction="column" sx={{ width: "60%", alignItems: "center" }}>
                            <Stack sx={{ height: 70, width: "100%", backgroundColor: "white", alignItems: "left", pl: 2, pt: 2}}>
                                <Typography sx={{ height: "100%", fontSize: 30 }}>
                                    Heading Comes Here 
                                </Typography>
                            </Stack>
                            <DashboardTableComponent />
                        </Stack>
                        <Divider orientation="vertical" flexItem />
                        <Stack direction="column" sx={{ width: "40%", alignItems: "center" }}>
                            <Wrapper><Stack direction="row" sx={{ width: "100%", justifyContent: "space-around", padding: 0, backgroundColor: "#607d8b36", height: 50 }}>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to={`/${address}/index`}><Typography sx={{ height: "100%", fontSize: 30 }}>Index</Typography></NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to={`/${address}/cashpool`}><Typography sx={{ height: "100%", fontSize: 30 }}>Cash Pool</Typography></NavLink>
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
        </Box>
    )
}

export default Dashboard