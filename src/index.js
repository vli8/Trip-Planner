//webpack reads from entry point index.js (this file) and reads everything on it like a backend file which is why it can compile the 'require'
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "Your api token here";
const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 50.705],//location of Full Stack
    zoom: 12, //Starting zoom
    style: "mapbox://styles/mapbox/streets-v10" //beginning styling template
})
