const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/gnews', async (req, res) => {
    try {
        const { q, lang, max } = req.query;
        const apiKey = process.env.GNEWS_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'API key is not configured.' });
        }
        const url = `https://gnews.io/api/v4/search?q=${q}&lang=${lang}&max=${max}&apikey=${apiKey}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
