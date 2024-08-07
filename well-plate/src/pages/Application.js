import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import backgroundImage from "../assets/background.jpeg";
import placeholder1 from "../assets/ss1.png";
import placeholder2 from "../assets/ss2.png";
import placeholder3 from "../assets/ss3.png";
import mockup from "../assets/mockup1.png";


const Application = () => {
    return (
        <div className="application">
        <Card  sx={{ background: '#B8CCB4', borderRadius: 8, backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', padding: '20px', margin: '20px' }}>
            {/* <Typography variant="h4" align="center" style={{color: '#4B4B4B', paddingTop: '20px'}}>Application</Typography> */}
            <Grid container spacing={3} style={{padding: '20px', justifyContent:"center"}}>
                    <Typography variant="h3" style={{ color: '#4B4B4B', marginTop: "80px" }}>Well-Plate Application</Typography>
                    <Typography variant="body1" style={{ color: '#4B4B4B', marginTop: "50px", fontSize: 30 }}>
                    Welcome to WellPlate, where volunteering meets vital community needs.<br />Our app is dedicated to transforming the way food banks manage their deliveries by empowering local volunteers to pick up and distribute food efficiently and compassionately. <br /> 
                    </Typography>
                    <CardMedia component="img" image={mockup} alt="placeholder1" />
            </Grid>
        </Card>
        </div>
    );
    }

export default Application;