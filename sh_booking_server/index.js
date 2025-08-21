const express = require('express');
const app = express(); 
const cors = require('cors');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the ShBooking API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})