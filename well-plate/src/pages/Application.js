import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import backgroundImage from "../assets/background.jpeg";
import placeholder1 from "../assets/wechat1.jpeg";
import placeholder2 from "../assets/wechat2.jpeg";
import placeholder3 from "../assets/wechat3.jpeg";


const Application = () => {
    return (
        <div className="application" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backdropFilter: 'blur(20px)'}}>
        <Card  sx={{ background: 'rgba(184, 204, 180, 0.25)', borderRadius: 8, backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', padding: '20px', margin: '20px' }}>
            <Typography variant="h4" align="center" style={{color: 'white', paddingTop: '20px'}}>Application</Typography>
            <Grid container spacing={3} style={{padding: '20px'}}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" style={{ color: 'white' }}>LOREM IPSUM</Typography>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        asdkfajs;kfiasjdfdaskfjfadk;gidgfagadf;klgndjkfgjdkgfkjgdfjkbjkbnfdobfkbfndbdfsnlbjkdfsbfjnbdsbjkldsfnbdlkbfj
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia component="img" image={placeholder1} alt="placeholder1" />
                </Grid>
                <Grid item xs={12} md={6}>
                        <Typography variant="h3" style={{ color: 'white' }}>asdf asdf asdf asdf asdf</Typography>
                    </Grid>
            </Grid>
        </Card>
        </div>
    );
    }

export default Application;