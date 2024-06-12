import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NavBar = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#000'}}>
            <Toolbar>
                <Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>
                        Well Plate
                    </Typography>
                </Box>
                
                <Box mr={2}>
                    <Button color="inherit">Home</Button>
                </Box>
                <Box mr={2}>
                    <Button color="inherit">Login</Button>
                </Box>
                <Box mr={2}>
                    <Button color="inherit">Join</Button>
                </Box>
                <Box mr={2}>
                    <Button color="inherit">Donate</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;