const { request, response } = require('express')
const express = require ('express')
const require =require ('request')
const app =express()

request('',(erroe,response,body)=>{
    
})

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

