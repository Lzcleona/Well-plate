import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import food from "../assets/food.png";
import seniors from "../assets/seniors.png";
import delivery from "../assets/delivery.png";
import community from "../assets/community.png";
import "./styles/Home.css";

const images = [
    { src: seniors, title: "Seniors" },
    { src: food, title: "Food" },
    { src: delivery, title: "delivery" },
    { src: community, title: "community" },
];

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Well Plate!</h1>
            <div className="photo-grid">
                {images.map((image, index) => (
                    <div className={`grid-photo grid-photo-${index + 1}`} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={image.src}
                                alt={image.title}
                                style={{ objectFit: "cover", height: 300}}
                            >
                            </CardMedia>
                        </Card>
                    </div>
                ))}
            </div>
            <div style={{ padding: '4%'}}>
                <Card sx={{ backgroundColor: "#B8CCB4", borderRadius: 8 }}>
                    <Typography fontSize={22} sx={{ padding: '2%' }}>
                        WellPlate hopes to enhance the quality of life for seniors and those in need by delivering nutritious, personalized meals tailored to their medical conditions, preferences, and dietary restrictions. We strive to ensure everyone receives the care, attention, and nourishment they deserve, fostering independence and well-being through compassionate and reliable meal services.
                        
                    </Typography>
                </Card>
            </div>

        </div>
    );
    }

export default Home;