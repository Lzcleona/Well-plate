import React from "react";
import { Container, Box, Typography, Card, CardContent, Link, Button, TextField } from "@mui/material";
import { loadStripe } from '@stripe/stripe-js';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const stripePromise = loadStripe('pk_test_51PUI6Q04FzSfxy9FbMCynWt6glI8Qz6p8549AMW6hswNfASum8TNGwinBW07aJVduf1Wih7270nwOr6fIxRZcJAs00UfRqvXXk');
const amounts = [5, 10, 25, 50, 100];

const DonationConfirmation = () => {
    const [amount, setAmount] = React.useState(0);

    const handleClick = (amount) => {
        setAmount(amount);
    }

    var paymentSuccess = true;

    return (
            <Container maxWidth="lm">
            <Box 
            component="from"
            sx={{ padding: 5}}>
                
                <Card sx={{ backgroundColor: '#eeeeee', padding: 8, borderRadius: 10
                }}>
                    <CardContent>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {paymentSuccess ? 'Thank you for your donation! It means a lot to us and we really appreciate it!' : 'Oops, an error occurred! Please try again.'}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        
            </Container>

        
    );
    }

export default DonationConfirmation;