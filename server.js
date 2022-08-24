const express = require('express');
const app = express();

const countries = [{ id: 1, country: 'India', city: 'Jaipur' }, { id: 2, country: 'Costa Rica', city: 'San Jose' }]

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/countries', (req, res) => {
    res.send(JSON.stringify(countries))
})

app.listen(5000, () => console.log('Listening on port 5000 ...'))