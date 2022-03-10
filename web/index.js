const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Inside index')
    res.send('Test index')
});

app.get('/test', (req, res) => {
    console.log('Inside test')
    res.send('Test')
});

app.listen(8000, () => {
    console.log('Port 8000')
})