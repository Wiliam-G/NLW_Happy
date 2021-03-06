
// create map
const map = L.map("mapid").setView([-27.2144037, -49.64051], 13);

// create tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// crate icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {
  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-pupup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"> <img src="./images/arrow-white.svg"> </a>`
  );

  //  create and add maker
  console.log(lat, lng);
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach(span => {
  console.log(span.dataset);
  if(span.dataset.name != "undefined" || span.dataset.lat != "undefined" || span.dataset.lng != "undefined"){
    
    const orphanage = {
      id: span.dataset.id,
      name: span.dataset.name,
      lat: span.dataset.lat,
      lng: span.dataset.lng
    }
    addMarker(orphanage);
  }

})
