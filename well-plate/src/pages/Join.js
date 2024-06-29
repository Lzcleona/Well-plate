import React from "react";
import { Container, Box, Typography, Card, CardContent, Button } from "@mui/material";

//https://docs.google.com/forms/d/e/1FAIpQLSdZBQUJzwmmQccY43qGyhPNddtFg0oYGk6E2EhcJNfNAXbo3Q/viewform?usp=sf_link

const Join = () => {
    return (
        <Container maxWidth="lm">
        <Box 
        component="from"
        sx={{ padding: 5}}>
            
            <Card sx={{ backgroundColor: '#eeeeee', padding: 8, borderRadius: 10
            }}>
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold' }} align="left">
                    <h2>Join us today to make a positive impact on our community! Apply to be a volunteer driver or food distributor.</h2>
                    <br />
                    <h3>Application Requirements: </h3>
                    <ul>
                        <li>must be legally able to drive if applying for driver</li>
                        <li>at least 13 years old</li>
                        <li>responsible and good at communication</li>
                        <li>volunteer hours provided</li>
                    </ul>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Button 
        variant="contained"
        sx={{ width: 'calc(30% - 8px)', m:1, fontSize: 20, backgroundColor: '#6cbd75', ":hover": { backgroundColor: '#487d4e' }}}
        href="https://docs.google.com/forms/d/e/1FAIpQLSdZBQUJzwmmQccY43qGyhPNddtFg0oYGk6E2EhcJNfNAXbo3Q/viewform?usp=sf_link">
            Apply Now
        </Button>
        </Container>
);
    }

export default Join;