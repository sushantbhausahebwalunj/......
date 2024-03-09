import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Header2() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" sx={{ backgroundColor: "#141E46" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" width="100%">
                        <AdbIcon />
                        <Typography variant="h3" sx={{ ml: { xs: 0, md: 25   } }}>
                            Abhyaskar
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <TextField
                                variant="outlined"
                                size='small'
                                placeholder="Search"
                                InputProps={{
                                    style: { backgroundColor: 'white' },
                                    startAdornment: (
                                        <SearchIcon style={{ borderColor: "white" }} />
                                    ),
                                }}
                            />
                            <AccountCircleIcon style={{ fontSize: 60, marginTop: "3%", marginLeft: "5%", marginBottom: "3%" }} />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header2