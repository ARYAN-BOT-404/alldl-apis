const express = require('express');
const { alldl } = require('aryan-videos-downloader');
const path = require('path');
const axios = require('axios')

const app = express(); // Initialize app here
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get("/docs", (req, res) => res.sendFile(path.join(__dirname, 'public', 'docs.html')));



app.get('/alldl', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const data = await alldl(url);
        res.json(data);
        console.log(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to download media' });
    }
});

app.listen(port, () => {
    console.log(`Server is running`);
});
