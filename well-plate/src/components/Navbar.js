import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NavBar = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#369931'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, display: 'flex', alignItems: 'center', fontWeight: 'bold', fontFamily: 'Times New Roman'}}>
                        Well Plate
                    </Typography>
                </Box>
                
                <Box mr={2}>
                    <Button href="/" color="inherit">Home</Button>
                </Box>
                <Box mr={2}>
                    <Button href="/login" color="inherit">Login</Button>
                </Box>
                <Box mr={2}>
                    <Button href="/join" color="inherit">Join</Button>
                </Box>
                <Box mr={2}>
                    <Button href="/donate" color="inherit">Donate</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;