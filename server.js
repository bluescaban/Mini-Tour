const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to detect language or any other server-side operations
app.use((req, res, next) => {
    // Example: detect language from URL like '/fr-fr' or '/en-us'
    const languageRegex = /\/(fr-fr|en-us)/i;
    const match = req.url.match(languageRegex);
    if (match) {
        // Do something with the matched language
        // For instance, set it in a response header or in a cookie
        res.setHeader('Detected-Language', match[1]);
    }
    next();
});

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
