import React from "react";
import { Box, Typography, Card, CardContent, Link } from "@mui/material";


const Donate = () => {
    return (
        <div className="donate">
        <Box sx={{ padding: 12}}>
            <Card sx={{ backgroundColor: '#eeeeee', padding: 8, borderRadius: 10
             }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }}>
                    Lorem ipsum dolor sit amet, <Link>consectetur adipiscing elit</Link>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        
        </div>
    );
    }

export default Donate;