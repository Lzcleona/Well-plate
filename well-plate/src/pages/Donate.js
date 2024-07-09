import React from "react";
import { Container, Box, Typography, Card, CardContent, Link, Button, TextField } from "@mui/material";
import { loadStripe } from '@stripe/stripe-js';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const stripePromise = loadStripe('pk_test_51PUI6Q04FzSfxy9FbMCynWt6glI8Qz6p8549AMW6hswNfASum8TNGwinBW07aJVduf1Wih7270nwOr6fIxRZcJAs00UfRqvXXk');
const amounts = [5, 10, 25, 50, 100];
const paymentLinks = {
    5: 'https://buy.stripe.com/test_3cseVieQ1edzgBq000',
    10: 'https://buy.stripe.com/test_fZe4gEgY9edz0CsbIJ',
    25: 'https://buy.stripe.com/test_6oE8wUdLXb1n98Y5km',
    50: 'https://buy.stripe.com/test_14k6oM6jv5H35WM5kn',
    100: 'https://buy.stripe.com/test_7sI6oMbDP6L770QfZ2',
};

const Donate = () => {
    const [amount, setAmount] = React.useState(0);
    const [paymentLink, setPaymentLink] = React.useState('');

    const handleClick = (amount) => {
        setAmount(amount);
        setPaymentLink(paymentLinks[amount] || 'https://buy.stripe.com/test_28o7sQcHT0mJ3OE28d');
    }

    const handleDonate = async () => {
        if (paymentLink) {
            window.location.href = paymentLink;
        } else {
            alert('Please select an amount to donate');
        }
    };

    // TODO write function that calls the payment server

    return (
            <Container maxWidth="lm">
            <Box 
            component="from"
            sx={{ padding: 5}}>
                
                <Card sx={{ backgroundColor: '#eeeeee', padding: 8, borderRadius: 10
                }}>
                    <CardContent>
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            Donate now to make a difference!
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', mb: 3}}>
                            {amounts.map((amount) => (
                                <Button
                                    key={amount}
                                    onClick={() => handleClick(amount)}
                                    variant="contained"
                                    sx={{ width: 'calc(30% - 8px)', m:1, fontSize: 20, backgroundColor: '#c0d9eb', color: '#073352'}}
                                >
                                    ${amount}
                                </Button>
                            ))}
                        {/* <TextField 
                            label="Custom Amount"
                            variant="outlined"
                            // width="calc(30% - 8px)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            sx={{ width: 'calc(30% - 8px)', m:1}}
                        /> */}
                        <Button
                            variant="outlined"
                            // width="calc(30% - 8px)"
                            value={amount}
                            href="https://buy.stripe.com/test_28o7sQcHT0mJ3OE28d"
                            sx={{ width: 'calc(30% - 8px)', m:1}}
                        >
                            Custom Amount
                        </Button>

                        <Button
                            startIcon={<PaymentIcon />}
                            type="submit"
                            variant="contained"
                            sx={{ width: 'calc(30% - 8px)', m:1, fontSize: 20}}
                            // href="/donate-confirmation"
                            onClick={handleDonate}
                        >
                            Donate
                        </Button>
                        </Box>
                        <Typography>
                            Payment amount: ${amount}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        
            </Container>

        
    );
    }

export default Donate;