import React from 'react';
import { Box, Typography, Container, IconButton } from "@mui/material";
import { Facebook, Instagram } from '@mui/icons-material';
import logo from '../assets/logo512.png';

const Footer = () => {
    return (
        <Box bgcolor="#eeeeee" sx={{ padding: 12 }}>
            <Box sx={{display:'flex'}}>
                <Container>
                    <img src={logo} alt="logo" style={{ width: 100, height: 100, display: 'block', margin: 'auto' }} />
                </Container>
                <Container>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Times New Roman', textAlign: 'center' }}>
                        Well Plate
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        1234 Main St, Anytown, USA
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        Phone: 555-555-5555
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        Email: contact@email.com
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </Box>

                </Container>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2">
                © Well Plate {new Date().getFullYear()}. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
        
    );
}

export default Footer;