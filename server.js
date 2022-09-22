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


app.get('/country/id/:abc', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const wlcountry = country.filter((item) => item.id == req.params.abc)
    if (wlcountry.length === 0) res.status(404).send('Country not found for id ' + req.params.abc);
    res.send(JSON.stringify(wlcountry));
})
app.get('/country/city/:xyz', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const wlcountry = country.filter((item) => item.city.toLowerCase() === req.params.xyz.toLowerCase())
    if (wlcountry.length === 0) res.status(404).send('Country not for city ' + req.params.xyz);
    res.send(JSON.stringify(wlcountry));
})
