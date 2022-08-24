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
app.get('/country', (req, res) => {
    res.send(JSON.stringify(country));
})

app.get('/country/:id/:city', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const wlcountry = country.filter((item) => item.id == req.params.id)
    if (country.length === 0) res.status(404).send('Country not in the wishlist');
    res.send(JSON.stringify(country));
})
const port = process.env.PORT || 5000;
console.log(process.env.PORT);

app.listen(port, () => console.log(`Listening on port ${port} ...`));
