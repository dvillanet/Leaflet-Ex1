var mymap = L.map('mapid').setView([41.3870154, 2.1700471], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHZpbGxhbmV0IiwiYSI6ImNrZWpuM2FhdzI3cjQyemx0Yjg1NDFzMXIifQ.o_e6KtOoqLQf0Xdm9Xh_Zw'
}).addTo(mymap);

var marker = L.marker([41.386802, 2.166130]).addTo(mymap)
.bindPopup("<b>Restaurant Centfocs</b><br/>Cuina Mediterrània<br/>Carrer Balmes 16, 08007 Barcelona");