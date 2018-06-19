//webpack reads from entry point index.js (this file) and reads everything on it like a backend file which is why it can compile the 'require'
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsYWRlbGZvIiwiYSI6ImNqaW01aGk3cjAwa3Ezd28yeG5rdDA4ZG4ifQ.9cpbfyj_cB5Ikc2tMIBBdw';
const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],//location of Full Stack
    zoom: 12, //Starting zoom
    style: "mapbox://styles/mapbox/streets-v10" //beginning styling template
})
