# Wanderlust Server - Wishlist of Places to travel
- Create a Web Server using Express
- Create a Country List Object   
``` javascript 
// for example
const countries = [{id: 1, country: 'India', city: 'Jaipur'},{id: 2, country: 'Costa Rica', city: 'San Jose'}]
const places = [{id: 1, country: 'India', city: 'Jaipur', places:['Amber Fort', 'City Palace']},{id: 2, country: 'Costa Rica', city: 'San Jose', places:['Arenal Volcano']}]
```
- Expose endpoints
  - '/' for Wanderlust Hompage
  - '/countries' to expose countries object
  - '/places' to expose all the places
  
## Exercise Tasks
- `POST /places` - this route should accept form data and add it to the Wishlist.
- `GET /places/:id` - this route should display a single place and its details
- `PUT /places/:id` - this route should accept edits to existing places.
- `DELETE /placess/:id` - this route should allow you to delete a specific place from the array.
