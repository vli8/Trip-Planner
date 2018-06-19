//webpack reads from entry point index.js (this file) and reads everything on it like a backend file which is why it can compile the 'require'
const mapboxgl = require('mapbox-gl');
const markers = require('./markers.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlsYWRlbGZvIiwiYSI6ImNqaW01aGk3cjAwa3Ezd28yeG5rdDA4ZG4ifQ.9cpbfyj_cB5Ikc2tMIBBdw';
const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],//location of Full Stack
    zoom: 12, //Starting zoom
    style: "mapbox://styles/mapbox/streets-v10" //beginning styling template
})

const marker = document.createElement("div");

marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);

markers('restaurants', [-74.009, 40.705]).addTo(map)
