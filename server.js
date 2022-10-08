
const express = require ('express')

const app =express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


const countries=[{
    id:1,
    country:'INDIA',
    place:'KULU MANALI'
},{
    id:2,
    country:'NEPAL',
    place:'Mt.EVEREST'
},{
    id:3,
    country:'EGYPT',
    place:'PYRAMIDS'
},{
    id:4,
country:'USA',
place:'HOLLYWOOD'
},{
    id:5,
    country:'JAPAN',
    place:'Mt.FUJI'
},{
    id:6,
    country:'ARIZONA',
    place:'GRAND CANYON'
},{
    id:7,
    country:'AFRICA',
    place:'SAFARI'
},{
    id:8,
    country:'DUBAI',
    place:'PALM ISLAND'
},{
    id:9,
    country:'CHINA',
    place:'THE GREAT WALL'
},{
    id:10,
    country:'SPAIN',
    place:'BARCELONA'
}
]

app.get('/', (req, res) => {
    res.send(`WELCOME TO MY TRAVEL LUST LISTS,\n (to see my lists ,kindly add '/countries' to above url bar )`);
})

app.get('/countries', (req, res) => {
    res.send(JSON.stringify(countries));
})
app.get('/countries/:id', (req, res) => {
   
    console.log(req.params);
    
    const countryById = countries.filter((item) => item.id == req.params.id)

    
    if (countryById.length === 0) res.status(404).send('country not found');
    res.send(JSON.stringify(countryById));
})
app.get('/places/:place', (req, res) => {
   
    console.log(req.params);
    
    const countryByPlaces = countries.filter((item) => item.place.toLowerCase() == req.params.place.toLowerCase())

    
    if (countryByPlaces.length === 0) res.status(404).send('place not found');
    res.send(JSON.stringify(countryByPlaces));
})


app.post('/places',(req,res)=> {
 console.log(req.body)
 const{country,place}=req.body
    let addplace={
        id: countries.length + 1,
       country:req.body.country,
        place:req.body.place
    }

    console.log(addplace)
    
    countries.push(addplace)
    console.log(countries)
    res.redirect('/countries')
})

app.put('/places/:id',(req,res)=> {
    const id = req.params
    const getId= countries.find((item) => item.id == req.params.id);
 if(!id){
        res.send('Provide some id to update')
        return
    }

    getId.place=req.body.place

    res.redirect('/countries')   
})


app.delete('/places/:id',(req,res)=> {
    const id = req.params
    const getId= countries.find((item) => item.id == req.params.id);
 if(!id){
        res.send('Provide some id to update')
        return
    }

    const idx = countries.indexOf(getId)
    countries.splice(idx,1)

    res.redirect('/countries')  
})


const port=process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));






// app.get('/courses/:id/:year', (req, res) => {
//     // Request Parameters - mandatory for your endpoint
//     console.log(req.params);

//     // Query Parameters - optional
//     console.log(req.query);

//     // Filter out the course
//     const course = courses.filter((item) => item.id == req.params.id)

//     // Validate if the course exists
//     if (course.length === 0) res.status(404).send('Course not found');
//     res.send(JSON.stringify(course));
// })

// app.get('/country/id/:abc', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     const wlcountry = country.filter((item) => item.id == req.params.abc)
//     if (wlcountry.length === 0) res.status(404).send('Country not found for id ' + req.params.abc);
//     res.send(JSON.stringify(wlcountry));
// })
// app.get('/country/city/:xyz', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     const wlcountry = country.filter((item) => item.city.toLowerCase() === req.params.xyz.toLowerCase())
//     if (wlcountry.length === 0) res.status(404).send('Country not for city ' + req.params.xyz);
//     res.send(JSON.stringify(wlcountry));
// })
