const express = require("express");
const app = express();
const country = [
    {
        id: 1,
        country: 'india',
        city:'jaipur'

    },
    {
        id: 2,
        country: 'india',
        city:'ladakh'
    },
    {
        id: 3,
        country: 'Australia',
        city:'Melbourne'
    },
    {
        id: 4,
        country: 'Germany',
        city:'Berlin'
    },
    {
        id: 5,
        country: 'india',
        city:'jaipur'
    },
    {
        id: 6,
        country: 'England',
        city:'London'
    },
    {
        id: 7,
        country: 'UAE',
        city:'Abu Dhabi'
    }
]

app.get('/', (req, res) => {
    res.send('Hompage');
})
// app.get('/country', (req, res) => {
//     res.send(JSON.stringify(country));
// })
app.get('/:city',(req, res) => {
    res.send('this is from ' + req.params.city );
})

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
const port = process.env.PORT || 5000;
console.log(process.env.PORT);

app.listen(port, () => console.log(`Listening on port ${port} ...`));
