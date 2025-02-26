import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './styles/Navbar.css';

const NavBar = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#369931'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" className="comfortaa-nav" sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>
                        Well Plate
                    </Typography>
                </Box>
                
                <Box mr={2}>
                    <Button href="#/" color="inherit">Home</Button>
                </Box>
                {/* <Box mr={2}>
                    <Button href="/login" color="inherit">Login</Button>
                </Box> */}
                <Box mr={2}>
                    <Button href="#/join" color="inherit">Join</Button>
                </Box>
                <Box mr={2}>
                    <Button href="#/donate" color="inherit">Donate</Button>
                </Box>
                <Box mr={2}>
                    <Button href="#/application" color="inherit">App</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
