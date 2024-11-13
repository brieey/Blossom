const express = require('express');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
const port = process.env.PORT;

app.get('/flowers', async (req, res) => {
  try {
    // Example: Fetch data from an external API or database
    const response = await axios.get(`https://perenual.com/api/species-list?key=${process.env.FLOWER_API}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching flowers:', error);
    res.status(500).json({ error: 'Failed to fetch flowers' });
  }
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${process.env.PORT}`);
});
