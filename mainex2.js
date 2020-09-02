$(document).ready(function () {

var mymap = L.map('mapid').setView([41.56090801119814 , 2.0109701156616215], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHZpbGxhbmV0IiwiYSI6ImNrZWpuM2FhdzI3cjQyemx0Yjg1NDFzMXIifQ.o_e6KtOoqLQf0Xdm9Xh_Zw'
}).addTo(mymap);

var marker = L.marker();
var popup = L.popup();

function onMapClick(e) {
    mymap
        .setView(e.latlng, 18)
    marker
        .setLatLng(e.latlng)
        .addTo(mymap)
        .bindPopup("<b>Les meves coordenades són:</b><br/>Latitud: " + e.latlng.lat + " <br/>Longitud: " + e.latlng.lng)
        .openPopup();

}

mymap.on('click', onMapClick);
})

