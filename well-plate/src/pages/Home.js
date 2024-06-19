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
            <p>Welcome to the Well Plate!</p>
            <div className="photo-grid">
                {images.map((image, index) => (
                    <div className={`grid-photo grid-photo-${index + 1}`} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={image.src}
                                alt={image.title}
                                style={{ objectFit: "cover"}}
                            >
                            </CardMedia>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
    }

export default Home;