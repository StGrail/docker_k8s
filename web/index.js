const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Test index')
});

app.get('/test', (req, res) => {
    res.send('Test')
});

app.listen(8000, () => {
    console.log('Port 8000')
})