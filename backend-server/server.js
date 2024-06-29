const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api/payment', paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
