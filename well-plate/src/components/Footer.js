import React from 'react';
import { Box, Typography, Container, IconButton } from "@mui/material";
import { Facebook, Instagram } from '@mui/icons-material';
import logo from '../assets/icon.png';
import googleDownload from '../assets/google_download.png';

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
                        Irvine, California
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        Phone: 949-210-5077
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        Email: leonalinzhaocen@gmail.com
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        <IconButton
                            href='https://www.instagram.com/well_plate2024?igsh=MzRlODBiNWFlZA=='
                        >
                            <Instagram />
                        </IconButton>
                    </Box>

                </Container>
            </Box>
            <Box>
            <a 
                href="https://play.google.com/store/apps/details?id=com.leona.WellPlate" 
                style={{ display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: '250px', height: '83px' }}
            >
                <img 
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1295568000" 
                    alt="Download on the App Store" 
                    style={{ borderRadius: '13px', width: '250px', height: '83px' }}
                />
            </a>
            <a 
                href="https://play.google.com/store/apps/details?id=com.leona.WellPlate" 
                style={{ display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: '250px', height: '83px' }}
            >
                <img 
                    src={googleDownload}
                    alt="Download on the App Store" 
                    style={{ borderRadius: '13px', width: '250px', height: '83px' }}
                />
            </a>
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